/* ═══════════════════════════════════════════════════════════════
   VAULT APP — Main application controller
   Reads window.CURRICULUM (vault-curriculum.js)
   Uses window.Exercises  (vault-exercises.js)
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────────────────────── */
  var state = {
    role:               '',
    completed:          {},      /* { lessonId: true }     */
    openUnits:          { 0: true }, /* unitIndex → bool   */
    currentLesson:      null,
    currentStep:        0,
    streak:             0,
    lastCompletionDate: null
  };

  /* ─────────────────────────────────────────────────────────────
     EXERCISE MAPS
  ───────────────────────────────────────────────────────────── */
  var EXERCISE_NAMES = {
    multipleChoice: 'Multiple Choice',
    dragSort:       'Sort Exercise',
    fillBlank:      'Fill in the Blank',
    matching:       'Matching Pairs',
    checklist:      'Checklist',
    scenario:       'Scenario',
    timedChallenge: 'Timed Challenge'
  };

  var EXERCISE_FNS = {
    multipleChoice: 'renderMultipleChoice',
    dragSort:       'renderDragSort',
    fillBlank:      'renderFillBlank',
    matching:       'renderMatching',
    checklist:      'renderChecklist',
    scenario:       'renderScenario',
    timedChallenge: 'renderTimedChallenge'
  };

  /* ─────────────────────────────────────────────────────────────
     BOOTSTRAP
  ───────────────────────────────────────────────────────────── */
  function init() {
    state.role = localStorage.getItem('sanmarinAuthRole') || 'member';
    try {
      var p = JSON.parse(localStorage.getItem('vaultProgress') || '{}');
      state.completed          = p.completed          || {};
      state.streak             = p.streak             || 0;
      state.lastCompletionDate = p.lastCompletionDate || null;
    } catch (e) {}

    injectStyles();
    setupNav();
    setupLessonNavButtons();
    setupKeyboardNav();
    renderDashboard();
  }

  /* ─────────────────────────────────────────────────────────────
     STYLE INJECTION — h2 inside lesson content
  ───────────────────────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('vault-app-styles')) return;
    var s = document.createElement('style');
    s.id = 'vault-app-styles';
    s.textContent =
      '#lesson-content h2{' +
        'font-size:22px;font-weight:900;color:var(--white);' +
        'letter-spacing:-.02em;line-height:1.2;margin-bottom:16px;}' +
      '#lesson-content h2+p{margin-top:0;}' +
      '#lesson-content h2:not(:first-child){margin-top:32px;}';
    document.head.appendChild(s);
  }

  /* ─────────────────────────────────────────────────────────────
     NAV
  ───────────────────────────────────────────────────────────── */
  function setupNav() {
    var lbl  = document.getElementById('role-label');
    var chip = document.getElementById('role-chip');
    if (lbl)  lbl.textContent = capitalize(state.role);
    if (chip && state.role === 'captain') chip.classList.add('captain');

    var btn = document.getElementById('signout-btn');
    if (btn) btn.addEventListener('click', function () {
      try { localStorage.removeItem('sanmarinAuthRole'); localStorage.removeItem('sanmarinAuthTime'); } catch (e) {}
      window.location.href = 'portal.html';
    });
  }

  /* ─────────────────────────────────────────────────────────────
     PROGRESS PERSISTENCE
  ───────────────────────────────────────────────────────────── */
  function saveProgress() {
    try {
      localStorage.setItem('vaultProgress',
        JSON.stringify({ completed: state.completed, streak: state.streak, lastCompletionDate: state.lastCompletionDate }));
    } catch (e) {}
  }

  function getTotals() {
    var total = 0, done = 0;
    window.CURRICULUM.forEach(function (unit) {
      unit.lessons.forEach(function (lesson) {
        total++;
        if (state.completed[lesson.id]) done++;
      });
    });
    return { total: total, done: done };
  }

  /* ─────────────────────────────────────────────────────────────
     DASHBOARD
  ───────────────────────────────────────────────────────────── */
  function renderDashboard() {
    renderCatalog();
    renderQuickStats();
    renderQuoteBox();
  }

  function renderCatalog() {
    var catalog = document.getElementById('course-catalog');
    catalog.innerHTML = '';

    var t   = getTotals();
    var pct = t.total ? Math.round((t.done / t.total) * 100) : 0;

    var hdr = el('div', 'catalog-header');
    hdr.innerHTML =
      '<h1>Your <span class="accent">Training Vault</span></h1>' +
      '<p>Master parliamentary debate through interactive lessons built from real team resources. ' +
      'Complete all units to become a confident, competitive debater.</p>' +
      '<div class="catalog-progress-row">' +
        '<span class="progress-label">Overall Progress</span>' +
        '<div class="overall-bar"><div class="progress-bar">' +
          '<div class="progress-bar-fill" style="width:' + pct + '%"></div>' +
        '</div></div>' +
        '<span class="progress-pct">' + pct + '%</span>' +
      '</div>';
    catalog.appendChild(hdr);

    window.CURRICULUM.forEach(function (unit, idx) {
      catalog.appendChild(buildUnitCard(unit, idx));
    });
  }

  function buildUnitCard(unit, unitIdx) {
    var doneInUnit = 0;
    unit.lessons.forEach(function (l) { if (state.completed[l.id]) doneInUnit++; });
    var allDone = doneInUnit === unit.lessons.length;
    var unitPct = unit.lessons.length ? Math.round((doneInUnit / unit.lessons.length) * 100) : 0;
    var isOpen  = !!state.openUnits[unitIdx];

    var stars = doneInUnit === 0 ? 0
      : allDone ? 3
      : doneInUnit >= Math.ceil(unit.lessons.length * 0.67) ? 2 : 1;

    var starSVG = '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>';
    var starHTML = [0, 1, 2].map(function (i) {
      return '<svg class="star' + (i < stars ? ' earned' : '') + '" viewBox="0 0 24 24" fill="currentColor">' + starSVG + '</svg>';
    }).join('');

    var card = el('div', 'unit-card' + (allDone ? ' completed' : '') + (isOpen ? ' open' : ''));

    var hdr = el('div', 'unit-header');
    hdr.setAttribute('role', 'button');
    hdr.setAttribute('tabindex', '0');
    hdr.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    hdr.innerHTML =
      '<div class="unit-number">' + String(unitIdx + 1).padStart(2, '0') + '</div>' +
      '<div class="unit-meta">' +
        '<div class="unit-title">' + esc(unit.title) + '</div>' +
        '<div class="unit-subtitle">' + unit.lessons.length + ' lessons · ' + doneInUnit + '/' + unit.lessons.length + ' completed</div>' +
      '</div>' +
      '<div class="unit-right">' +
        '<div class="star-row">' + starHTML + '</div>' +
        '<svg class="unit-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">' +
          '<polyline points="6 9 12 15 18 9"/>' +
        '</svg>' +
      '</div>';

    var progWrap = el('div', 'unit-progress-wrap');
    progWrap.innerHTML =
      '<div class="unit-progress-track">' +
        '<div class="unit-progress-fill" style="width:' + unitPct + '%"></div>' +
      '</div>';

    var lessonsOuter = el('div', 'unit-lessons');
    var lessonsInner = el('div', 'unit-lessons-inner');
    unit.lessons.forEach(function (lesson) {
      lessonsInner.appendChild(buildLessonRow(lesson));
    });
    lessonsOuter.appendChild(lessonsInner);

    card.appendChild(hdr);
    card.appendChild(progWrap);
    card.appendChild(lessonsOuter);

    function toggleUnit() {
      var open = card.classList.contains('open');
      card.classList.toggle('open', !open);
      hdr.setAttribute('aria-expanded', !open ? 'true' : 'false');
      state.openUnits[unitIdx] = !open;
    }
    hdr.addEventListener('click', toggleUnit);
    hdr.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleUnit(); }
    });

    return card;
  }

  function buildLessonRow(lesson) {
    var done    = !!state.completed[lesson.id];
    var exCount = lesson.steps.filter(function (s) { return s.type === 'exercise'; }).length;

    var row = el('div', 'lesson-row' + (done ? ' completed' : ''));
    row.setAttribute('role', 'button');
    row.setAttribute('tabindex', '0');
    row.innerHTML =
      '<div class="lesson-dot"></div>' +
      '<div class="lesson-name">' + esc(lesson.title) + '</div>' +
      (exCount
        ? '<span class="lesson-type-badge exercise">' + exCount + ' exercise' + (exCount > 1 ? 's' : '') + '</span>'
        : '') +
      '<span class="lesson-duration">' + lesson.steps.length + ' step' + (lesson.steps.length > 1 ? 's' : '') + '</span>';

    function open() { openLessonView(lesson); }
    row.addEventListener('click', open);
    row.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    return row;
  }

  /* ─────────────────────────────────────────────────────────────
     SIDEBAR WIDGETS
  ───────────────────────────────────────────────────────────── */
  function renderQuickStats() {
    var box = document.getElementById('quick-stats');
    if (!box) return;
    var t   = getTotals();
    var pct = t.total ? Math.round((t.done / t.total) * 100) : 0;
    box.innerHTML =
      '<div class="stats-header"><h3>Your Stats</h3></div>' +
      '<div class="stats-grid">' +
        statCell(String(t.done),                     'Done')     +
        statCell(String(t.total),                    'Lessons')  +
        statCell(String(window.CURRICULUM.length),   'Units')    +
        statCell(pct + '%',                          'Complete') +
        statCell(String(state.streak),               'Day Streak') +
      '</div>';
  }

  function statCell(val, lbl) {
    return '<div class="stat-cell">' +
      '<div class="stat-value">' + val + '</div>' +
      '<div class="stat-label">' + lbl + '</div>' +
    '</div>';
  }

  var QUOTES = [
    { text: 'The strength of an argument lies not in its volume but in its clarity.',              author: 'Debate Wisdom'      },
    { text: 'Wit is a sword; it is meant to make people feel the point as well as see it.',        author: 'G.K. Chesterton'    },
    { text: 'If you can\'t explain it simply, you don\'t understand it well enough.',              author: 'Albert Einstein'    },
    { text: 'Every argument you hear is data. Every rebuttal is practice. Every round is a rep.',  author: 'San Marin S&D' },
    { text: 'Extend, never repeat. Make the judge feel the weight of every dropped argument.',     author: 'Senior Debater'     },
    { text: 'Preparation is the confidence you carry before the round starts.',                    author: 'Coaching Notes'     },
    { text: 'In a debate, the winner makes the judge think they are right, not just that they are right.', author: 'Team Philosophy' },
  ];

  function renderQuoteBox() {
    var box = document.getElementById('quote-box');
    if (!box) return;
    var q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    box.innerHTML =
      '<div class="quote-text">' + esc(q.text) + '</div>' +
      '<div class="quote-author">' + esc(q.author) + '</div>';
  }

  /* ─────────────────────────────────────────────────────────────
     LESSON VIEW — OPEN
  ───────────────────────────────────────────────────────────── */
  function openLessonView(lesson) {
    state.currentLesson = lesson;
    state.currentStep   = 0;

    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('lesson-view').style.display    = 'block';

    buildLessonShell(lesson);
    renderStep(lesson, 0);
    window.scrollTo(0, 0);
  }

  /*
   * Builds the two-column shell around the lesson:
   *   lesson-view
   *   ├── #back-btn
   *   ├── #lesson-title  (title + meta + step-strip)
   *   ├── .lesson-view-layout
   *   │   ├── .lesson-steps-sidebar
   *   │   └── #lesson-content  (moved inside layout)
   *   └── #lesson-nav
   */
  function buildLessonShell(lesson) {
    var lv      = document.getElementById('lesson-view');
    var title   = document.getElementById('lesson-title');
    var content = document.getElementById('lesson-content');
    var nav     = document.getElementById('lesson-nav');

    /* ── Fill title block ── */
    var unitIdx  = findUnitForLesson(lesson.id);
    var unitName = unitIdx >= 0 ? window.CURRICULUM[unitIdx].title : '';
    title.innerHTML =
      '<div class="lesson-title-tag">Unit ' + (unitIdx + 1) + ' · ' + esc(unitName) + '</div>' +
      '<div class="lesson-title-h2">' + esc(lesson.title) + '</div>' +
      '<div class="lesson-title-meta">' +
        '<span>' + lesson.steps.length + ' steps</span>' +
        '<span> · </span>' +
        '<span>~' + Math.max(3, lesson.steps.length * 2) + ' min</span>' +
      '</div>';

    /* ── Step strip ── */
    var strip = el('div', 'step-strip');
    lesson.steps.forEach(function (step, i) {
      var pip = el('div', 'step-pip');
      pip.title = 'Step ' + (i + 1) + (step.type === 'exercise' ? ' · ' + (EXERCISE_NAMES[step.exerciseType] || 'Exercise') : '');
      pip.addEventListener('click', function () { goToStep(i); });
      strip.appendChild(pip);
    });

    /* ── Steps sidebar ── */
    var sidebar = el('div', 'lesson-steps-sidebar');
    sidebar.appendChild(el('h4', null, 'In this lesson'));
    lesson.steps.forEach(function (step, i) {
      var item  = el('div', 'step-list-item');
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      var numEl = el('div', 'step-num', String(i + 1));
      var lblEl = el('div', 'step-label', getStepLabel(step, i));
      item.appendChild(numEl);
      item.appendChild(lblEl);
      item.addEventListener('click', function () { goToStep(i); });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToStep(i); }
      });
      sidebar.appendChild(item);
    });

    /* ── Two-column layout wrapper ── */
    var layout = el('div', 'lesson-view-layout');
    layout.appendChild(sidebar);
    layout.appendChild(content); /* moves #lesson-content into layout */

    /* ── Insert into DOM ── */
    /* strip goes immediately after title block */
    title.parentNode.insertBefore(strip, title.nextSibling);
    /* layout goes after strip, before nav */
    lv.insertBefore(layout, nav);
  }

  function getStepLabel(step, index) {
    if (step.type === 'content') {
      var m = step.html.match(/<h[23][^>]*>([^<]+)/);
      return m ? m[1].trim() : ('Read · Part ' + (index + 1));
    }
    return EXERCISE_NAMES[step.exerciseType] || 'Exercise';
  }

  /* ─────────────────────────────────────────────────────────────
     LESSON VIEW — STEP RENDERING
  ───────────────────────────────────────────────────────────── */
  function renderStep(lesson, stepIndex) {
    state.currentStep = stepIndex;
    var step    = lesson.steps[stepIndex];
    var content = document.getElementById('lesson-content');
    content.innerHTML = '';
    content.style.animation = 'none';
    /* Force reflow to restart animation */
    void content.offsetWidth;
    content.style.animation = 'fadeIn 0.22s ease';

    if (step.type === 'content') {
      content.innerHTML = step.html;
      initKeyTerms(content);
    } else {
      var fn = window.Exercises[EXERCISE_FNS[step.exerciseType]];
      if (fn) {
        fn(content, step.exerciseConfig);
      } else {
        content.innerHTML = '<p style="color:var(--text-secondary)">Exercise renderer not found for type: ' + esc(step.exerciseType) + '</p>';
      }
    }

    updateStepStrip(lesson, stepIndex);
    updateStepSidebar(lesson, stepIndex);
    updateNavButtons(lesson, stepIndex);

    content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function goToStep(i) {
    var lesson = state.currentLesson;
    if (!lesson) return;
    renderStep(lesson, Math.max(0, Math.min(i, lesson.steps.length - 1)));
  }

  function updateStepStrip(lesson, idx) {
    document.querySelectorAll('.step-pip').forEach(function (pip, i) {
      pip.className = 'step-pip' + (i === idx ? ' active' : i < idx ? ' done' : '');
    });
  }

  function updateStepSidebar(lesson, idx) {
    document.querySelectorAll('.step-list-item').forEach(function (item, i) {
      item.className = 'step-list-item' + (i === idx ? ' active' : i < idx ? ' done' : '');
      var numEl = item.querySelector('.step-num');
      if (numEl) numEl.textContent = i < idx ? '✓' : String(i + 1);
    });
  }

  function updateNavButtons(lesson, idx) {
    var prevBtn     = document.getElementById('prev-btn');
    var nextBtn     = document.getElementById('next-btn');
    var completeBtn = document.getElementById('complete-btn');
    var isLast      = idx === lesson.steps.length - 1;
    var isDone      = !!state.completed[lesson.id];

    prevBtn.disabled = (idx === 0);

    if (isLast) {
      nextBtn.style.display     = 'none';
      completeBtn.style.display = 'inline-flex';
      completeBtn.disabled      = isDone;
      completeBtn.textContent   = isDone ? '✓ Completed' : 'Mark Complete';
    } else {
      nextBtn.style.display     = 'inline-flex';
      completeBtn.style.display = 'none';
      nextBtn.textContent       = idx === lesson.steps.length - 2
        ? 'Last Step →'
        : 'Next Step →';
    }
  }

  /* ─────────────────────────────────────────────────────────────
     LESSON NAV BUTTONS (wired once at startup)
  ───────────────────────────────────────────────────────────── */
  function setupLessonNavButtons() {
    document.getElementById('prev-btn').addEventListener('click', function () {
      goToStep(state.currentStep - 1);
    });

    document.getElementById('next-btn').addEventListener('click', function () {
      goToStep(state.currentStep + 1);
    });

    document.getElementById('complete-btn').addEventListener('click', function () {
      var lesson = state.currentLesson;
      if (!lesson || state.completed[lesson.id]) return;
      state.completed[lesson.id] = true;
      updateStreak();
      saveProgress();
      updateNavButtons(lesson, state.currentStep);
      showCompletionOverlay(lesson);
    });

    document.getElementById('back-btn').addEventListener('click', returnToDashboard);
  }

  /* ─────────────────────────────────────────────────────────────
     RETURN TO DASHBOARD
  ───────────────────────────────────────────────────────────── */
  function returnToDashboard() {
    var lv      = document.getElementById('lesson-view');
    var content = document.getElementById('lesson-content');
    var nav     = document.getElementById('lesson-nav');

    /* Dismantle the layout shell */
    var layout = lv.querySelector('.lesson-view-layout');
    if (layout) {
      /* Move #lesson-content back to lesson-view, before lesson-nav */
      lv.insertBefore(content, nav);
      layout.remove();
    }

    var strip = lv.querySelector('.step-strip');
    if (strip) strip.remove();

    document.getElementById('lesson-title').innerHTML = '';
    content.innerHTML = '';

    /* Reset nav button states */
    document.getElementById('prev-btn').disabled       = true;
    document.getElementById('next-btn').style.display  = 'inline-flex';
    document.getElementById('next-btn').textContent    = 'Next Step';
    document.getElementById('complete-btn').style.display = 'none';

    state.currentLesson = null;
    state.currentStep   = 0;

    lv.style.display                                    = 'none';
    document.getElementById('dashboard-view').style.display = '';

    renderCatalog();
    renderQuickStats();
    window.scrollTo(0, 0);
  }

  /* ─────────────────────────────────────────────────────────────
     KEY TERM TOOLTIPS
  ───────────────────────────────────────────────────────────── */
  function initKeyTerms(container) {
    container.querySelectorAll('.key-term[data-definition]').forEach(function (term) {
      if (term.querySelector('.tooltip')) return; /* already done */
      var def     = term.getAttribute('data-definition');
      var tooltip = document.createElement('span');
      tooltip.className   = 'tooltip';
      tooltip.textContent = def;
      term.setAttribute('tabindex', '0');
      term.appendChild(tooltip);
    });
  }

  /* ─────────────────────────────────────────────────────────────
     CONFETTI — removed. The completion overlay's stamp is the one
     authored completion moment; raining confetti belonged to the
     old dark theme's motion language, not the catalog's.
  ───────────────────────────────────────────────────────────── */

  /* ─────────────────────────────────────────────────────────────
     COMPLETION OVERLAY
  ───────────────────────────────────────────────────────────── */
  function showCompletionOverlay(lesson) {
    var overlay = el('div', 'completion-overlay');
    var card    = el('div', 'completion-card');

    var starSvg =
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="#b8905a" aria-hidden="true">' +
      '<path d="M12 2l2.9 6.26 6.86 0.74-5.12 4.63 1.42 6.75L12 16.9l-6.06 3.48 1.42-6.75L2.24 9l6.86-0.74z"/></svg>';
    card.innerHTML =
      '<div class="completion-icon"><span class="pt-stamp">Complete</span></div>' +
      '<div class="completion-title">Lesson Complete!</div>' +
      '<div class="completion-subtitle">' + esc(lesson.title) + '. Great work. Keep building your debate skills one lesson at a time.</div>' +
      '<div class="completion-stars">' +
        '<div class="completion-star">' + starSvg + '</div>' +
        '<div class="completion-star">' + starSvg + '</div>' +
        '<div class="completion-star">' + starSvg + '</div>' +
      '</div>';

    var btn = el('button', 'btn btn-primary btn-lg', 'Continue');
    btn.style.marginTop = '8px';
    card.appendChild(btn);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    function closeOverlay() {
      overlay.style.opacity    = '0';
      overlay.style.transition = 'opacity 0.2s ease';
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 220);
    }

    btn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeOverlay();
    });
  }

  /* ─────────────────────────────────────────────────────────────
     STREAK TRACKING
  ───────────────────────────────────────────────────────────── */
  function updateStreak() {
    var today = new Date().toISOString().slice(0, 10);
    if (state.lastCompletionDate === today) return;
    var prev = new Date(today);
    prev.setDate(prev.getDate() - 1);
    state.streak = (state.lastCompletionDate === prev.toISOString().slice(0, 10))
      ? state.streak + 1 : 1;
    state.lastCompletionDate = today;
  }

  /* ─────────────────────────────────────────────────────────────
     KEYBOARD NAVIGATION
  ───────────────────────────────────────────────────────────── */
  function setupKeyboardNav() {
    document.addEventListener('keydown', function (e) {
      if (!state.currentLesson) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); goToStep(state.currentStep + 1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goToStep(state.currentStep - 1); }
      if (e.key === 'Escape')     { returnToDashboard(); }
    });
  }

  /* ─────────────────────────────────────────────────────────────
     UTILITIES
  ───────────────────────────────────────────────────────────── */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls)      e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
  }

  function findUnitForLesson(lessonId) {
    for (var i = 0; i < window.CURRICULUM.length; i++) {
      for (var j = 0; j < window.CURRICULUM[i].lessons.length; j++) {
        if (window.CURRICULUM[i].lessons[j].id === lessonId) return i;
      }
    }
    return 0;
  }

  /* ─────────────────────────────────────────────────────────────
     BOOT
  ───────────────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
