/* ═══════════════════════════════════════════════════════════════
   VAULT EXERCISES — Seven reusable exercise renderers
   All functions exported on window.Exercises
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Inject supplemental styles not covered by vault-styles.css ── */
  (function injectStyles() {
    if (document.getElementById('vault-ex-styles')) return;
    var s = document.createElement('style');
    s.id = 'vault-ex-styles';
    s.textContent = [
      /* Sort list */
      '.sort-list{list-style:none;display:flex;flex-direction:column;gap:8px;}',
      '.sort-item{display:flex;align-items:center;gap:12px;padding:12px 16px;',
        'background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);',
        'border-radius:10px;cursor:pointer;transition:background .15s,border-color .15s,transform .15s;}',
      '.sort-item:hover{background:rgba(212,168,67,.06);border-color:rgba(212,168,67,.25);}',
      '.sort-item--selected{background:rgba(212,168,67,.12)!important;border-color:var(--gold-400)!important;',
        'box-shadow:0 0 0 2px rgba(212,168,67,.25);}',
      '.sort-item--locked{cursor:default;opacity:.6;}',
      '.sort-list--done .sort-item{border-color:rgba(74,222,128,.3);background:rgba(74,222,128,.05);}',
      '.sort-handle{color:var(--text-muted);font-size:16px;letter-spacing:1px;cursor:inherit;flex-shrink:0;}',
      '.sort-position{font-family:var(--font-mono);font-size:11px;font-weight:800;',
        'color:var(--text-muted);background:rgba(255,255,255,.06);',
        'border:1px solid rgba(255,255,255,.08);border-radius:5px;',
        'padding:2px 7px;flex-shrink:0;}',
      '.sort-item--selected .sort-position{color:var(--gold-400);border-color:rgba(212,168,67,.3);}',
      '.sort-text{flex:1;font-size:14px;font-weight:600;color:var(--text-secondary);}',
      '.sort-item--selected .sort-text{color:var(--text-primary);}',
      '.sort-item--locked .sort-text{color:var(--text-muted);}',
      '.sort-success{display:flex;align-items:center;gap:10px;padding:14px 18px;',
        'background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.3);',
        'border-radius:10px;font-size:14px;font-weight:700;color:#a7f3d0;',
        'animation:fadeInUp .3s ease;margin-top:12px;}',
      '.sort-success-icon{font-size:18px;}',
      /* Fill-blank */
      '.fill-in-form{display:flex;flex-direction:column;gap:18px;}',
      '.fill-in-row{display:flex;flex-direction:column;gap:8px;}',
      '.fill-in-label{font-size:13px;font-weight:700;color:var(--text-secondary);letter-spacing:.01em;}',
      '.fill-in-feedback{font-size:13px;color:var(--text-muted);line-height:1.5;padding:10px 14px;',
        'background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);',
        'border-radius:8px;animation:fadeInUp .2s ease;}',
      '.fill-model-label{font-weight:700;color:var(--text-muted);margin-right:6px;}',
      '.fill-model-text{color:var(--gold-300);font-weight:600;}',
      '.fill-in-btn-row{display:flex;align-items:center;gap:10px;margin-top:4px;}',
      /* Scenario */
      '.scenario-feedback-panel{margin-top:14px;}',
      /* Timed challenge */
      '.timed-phases{display:flex;flex-direction:column;gap:0;}',
      '.timed-phase-card{padding:20px 24px;margin-bottom:14px;animation:fadeInUp .3s ease;}',
    ].join('');
    document.head.appendChild(s);
  }());


  /* ─────────────────────────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────────────────────────── */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls)  e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function lockChildren(parent) {
    Array.from(parent.children).forEach(function (c) {
      c.style.cursor = 'default';
      c.setAttribute('tabindex', '-1');
    });
  }

  function feedbackEl(isCorrect, msg) {
    var div = el('div', 'quiz-feedback ' + (isCorrect ? 'correct-msg' : 'incorrect-msg'));
    div.style.animation = 'fadeInUp .25s ease';
    div.innerHTML = '<strong>' + (isCorrect ? '✓ Correct!' : '✗ Not quite.') + '</strong>' +
      (msg ? ' ' + esc(msg) : '');
    return div;
  }


  /* ═══════════════════════════════════════════════════════════
     1. MULTIPLE CHOICE
         cfg: { question, options[], correctIndex, explanations[] }
     ═══════════════════════════════════════════════════════════ */
  function renderMultipleChoice(container, cfg) {
    container.innerHTML = '';
    container.className = 'exercise-container';

    var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
    var answered = false;

    container.appendChild(el('div', 'exercise-prompt', esc(cfg.question)));

    var optList = el('div', 'quiz-options');

    cfg.options.forEach(function (text, idx) {
      var opt  = el('div', 'quiz-option');
      var mark = el('div', 'quiz-option-marker', esc(LETTERS[idx]));
      var body = el('div', 'quiz-option-text', esc(text));

      opt.setAttribute('role', 'button');
      opt.setAttribute('tabindex', '0');
      opt.setAttribute('aria-label', 'Option ' + LETTERS[idx] + ': ' + text);
      opt.appendChild(mark);
      opt.appendChild(body);
      optList.appendChild(opt);

      function choose() {
        if (answered) return;
        answered = true;

        var correct = idx === cfg.correctIndex;
        opt.classList.add(correct ? 'correct' : 'incorrect');
        if (!correct) optList.children[cfg.correctIndex].classList.add('correct');

        lockChildren(optList);

        var explanation = (cfg.explanations && cfg.explanations[idx]) || '';
        container.appendChild(feedbackEl(correct, explanation));
      }

      opt.addEventListener('click', choose);
      opt.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); }
      });
    });

    container.appendChild(optList);
  }


  /* ═══════════════════════════════════════════════════════════
     2. DRAG SORT  (click-to-select, click-to-swap — mobile safe)
         cfg: { instruction, items[], correctOrder[] }
         correctOrder: array of items[] values in correct sequence,
                       OR array of 0-based indices.
     ═══════════════════════════════════════════════════════════ */
  function renderDragSort(container, cfg) {
    container.innerHTML = '';
    container.className = 'exercise-container';

    container.appendChild(el('div', 'exercise-prompt', esc(cfg.instruction)));
    container.appendChild(el('div', 'exercise-subtext',
      'Tap an item to select it (highlighted in gold), then tap another item to swap positions.'));

    /* Normalise correctOrder to an array of indices into cfg.items */
    var correctSeq = cfg.correctOrder.map(function (v) {
      return (typeof v === 'number') ? v : cfg.items.indexOf(v);
    });

    /* Working order: indices into cfg.items, initially shuffled */
    var order = shuffle(cfg.items.map(function (_, i) { return i; }));

    /* Make sure the shuffle isn't accidentally already correct */
    if (JSON.stringify(order) === JSON.stringify(correctSeq)) {
      var last = order.pop();
      order.unshift(last);
    }

    var selectedPos = null; /* position (index) of the selected slot, or null */
    var done        = false;

    var listEl    = el('ul', 'sort-list');
    var successEl = el('div', 'sort-success');
    successEl.style.display = 'none';
    successEl.innerHTML = '<span class="sort-success-icon">✓</span> Correct order!';

    function isCorrect() {
      return order.every(function (itemIdx, pos) {
        return itemIdx === correctSeq[pos];
      });
    }

    function build() {
      listEl.innerHTML = '';
      order.forEach(function (itemIdx, pos) {
        var li = el('li', 'sort-item' + (done ? ' sort-item--locked' : '') +
          (selectedPos === pos ? ' sort-item--selected' : ''));
        li.setAttribute('role', 'option');
        li.setAttribute('tabindex', done ? '-1' : '0');
        li.setAttribute('aria-selected', selectedPos === pos ? 'true' : 'false');

        li.appendChild(el('span', 'sort-handle', '⠿'));
        li.appendChild(el('span', 'sort-position', String(pos + 1)));
        li.appendChild(el('span', 'sort-text', esc(cfg.items[itemIdx])));

        if (!done) {
          li.addEventListener('click', function () {
            if (done) return;
            if (selectedPos === null) {
              /* First tap: select this slot */
              selectedPos = pos;
              build();
              return;
            }
            if (selectedPos === pos) {
              /* Tap same slot: deselect */
              selectedPos = null;
              build();
              return;
            }
            /* Tap different slot: swap */
            var tmp = order[selectedPos];
            order[selectedPos] = order[pos];
            order[pos] = tmp;
            selectedPos = null;

            if (isCorrect()) {
              done = true;
              build();
              listEl.classList.add('sort-list--done');
              successEl.style.display = 'flex';
            } else {
              build();
            }
          });
          li.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); li.click(); }
          });
        }

        listEl.appendChild(li);
      });
    }

    build();
    container.appendChild(listEl);
    container.appendChild(successEl);
  }


  /* ═══════════════════════════════════════════════════════════
     3. FILL IN THE BLANK
         cfg: { instruction, fields[{label, placeholder, modelAnswer}] }
     ═══════════════════════════════════════════════════════════ */
  function renderFillBlank(container, cfg) {
    container.innerHTML = '';
    container.className = 'exercise-container';

    container.appendChild(el('div', 'exercise-prompt', esc(cfg.instruction)));

    var form   = el('div', 'fill-in-form');
    var fields = []; /* { input, feedbackEl } */

    cfg.fields.forEach(function (field, idx) {
      var row = el('div', 'fill-in-row');

      var lbl = el('label', 'fill-in-label', esc(field.label));
      lbl.setAttribute('for', 'vex-fill-' + idx);

      var inp = document.createElement('input');
      inp.type = 'text';
      inp.id   = 'vex-fill-' + idx;
      inp.className   = 'fill-in-field';
      inp.placeholder = field.placeholder || '';
      inp.setAttribute('autocomplete', 'off');
      inp.setAttribute('spellcheck',   'false');

      var fb = el('div', 'fill-in-feedback');
      fb.style.display = 'none';

      row.appendChild(lbl);
      row.appendChild(inp);
      row.appendChild(fb);
      form.appendChild(row);
      fields.push({ input: inp, fb: fb, field: field });
    });

    container.appendChild(form);

    /* Button row */
    var btnRow   = el('div', 'fill-in-btn-row');
    var submitBtn = el('button', 'btn btn-primary', 'Check Answers');
    var resetBtn  = el('button', 'btn btn-ghost',   'Try Again');
    resetBtn.style.display = 'none';
    btnRow.appendChild(submitBtn);
    btnRow.appendChild(resetBtn);
    container.appendChild(btnRow);

    /* Submit */
    submitBtn.addEventListener('click', function () {
      submitBtn.disabled = true;
      fields.forEach(function (f) {
        f.input.disabled = true;
        f.fb.style.display = 'block';
        f.fb.innerHTML =
          '<span class="fill-model-label">Model answer:</span>' +
          '<span class="fill-model-text"> ' + esc(f.field.modelAnswer) + '</span>';
      });
      resetBtn.style.display = 'inline-flex';
    });

    /* Reset */
    resetBtn.addEventListener('click', function () {
      fields.forEach(function (f) {
        f.input.value    = '';
        f.input.disabled = false;
        f.input.classList.remove('correct', 'incorrect');
        f.fb.style.display = 'none';
      });
      submitBtn.disabled   = false;
      resetBtn.style.display = 'none';
      fields[0].input.focus();
    });

    /* Enter to advance / submit */
    fields.forEach(function (f, idx) {
      f.input.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        if (idx < fields.length - 1) fields[idx + 1].input.focus();
        else submitBtn.click();
      });
    });
  }


  /* ═══════════════════════════════════════════════════════════
     4. MATCHING PAIRS
         cfg: { instruction, pairs[{left, right}] }
     ═══════════════════════════════════════════════════════════ */
  function renderMatching(container, cfg) {
    container.innerHTML = '';
    container.className = 'exercise-container';

    container.appendChild(el('div', 'exercise-prompt', esc(cfg.instruction)));
    container.appendChild(el('div', 'exercise-subtext',
      'Click a term on the left, then click its matching definition on the right.'));

    /* Shuffle right column; track original pair index */
    var rightItems = shuffle(cfg.pairs.map(function (p, i) {
      return { text: p.right, pairIdx: i };
    }));

    var selectedLeft = null; /* pairIdx of selected left item, or null */
    var matched      = {};   /* { pairIdx: true } for confirmed pairs */

    var grid     = el('div', 'matching-grid');
    var leftCol  = el('div', 'match-column');
    var rightCol = el('div', 'match-column');
    var statusEl = el('div', 'quiz-feedback correct-msg');
    statusEl.style.display = 'none';
    statusEl.innerHTML = '<strong>✓ All pairs matched!</strong> Well done.';

    function buildLeft() {
      leftCol.innerHTML = '';
      cfg.pairs.forEach(function (pair, pairIdx) {
        var isMatched  = !!matched[pairIdx];
        var isSelected = selectedLeft === pairIdx;

        var item = el('div',
          'match-item' +
          (isMatched  ? ' matched-correct' : '') +
          (isSelected ? ' selected'        : ''),
          esc(pair.left));

        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', isMatched ? '-1' : '0');

        if (!isMatched) {
          item.addEventListener('click', function () {
            selectedLeft = (selectedLeft === pairIdx) ? null : pairIdx;
            buildLeft();
          });
          item.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
          });
        }

        leftCol.appendChild(item);
      });
    }

    function buildRight() {
      rightCol.innerHTML = '';
      rightItems.forEach(function (rItem) {
        var isMatched = !!matched[rItem.pairIdx];

        var item = el('div',
          'match-item' + (isMatched ? ' matched-correct' : ''),
          esc(rItem.text));

        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', isMatched ? '-1' : '0');

        if (!isMatched) {
          item.addEventListener('click', function () {
            if (selectedLeft === null) return; /* nothing selected on left */

            if (selectedLeft === rItem.pairIdx) {
              /* Correct pair */
              matched[rItem.pairIdx] = true;
              selectedLeft = null;
              buildLeft();
              buildRight();
              if (Object.keys(matched).length === cfg.pairs.length) {
                statusEl.style.display = 'block';
                statusEl.style.animation = 'fadeInUp .3s ease';
              }
            } else {
              /* Wrong pair — flash red then reset */
              item.classList.add('matched-incorrect');
              var wrongLeft = leftCol.querySelector(
                '[tabindex]:not([-1]):nth-child(' + (selectedLeft + 1) + ')');
              /* fallback: find by searching children */
              Array.from(leftCol.children).forEach(function (c, i) {
                if (i === selectedLeft) c.classList.add('matched-incorrect');
              });
              selectedLeft = null;
              setTimeout(function () {
                item.classList.remove('matched-incorrect');
                buildLeft();
                buildRight();
              }, 650);
            }
          });
          item.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
          });
        }

        rightCol.appendChild(item);
      });
    }

    buildLeft();
    buildRight();

    grid.appendChild(leftCol);
    grid.appendChild(rightCol);
    container.appendChild(grid);
    container.appendChild(statusEl);
  }


  /* ═══════════════════════════════════════════════════════════
     5. CHECKLIST
         cfg: { instruction, items[{text, correct}], context }
         correct = true  → box SHOULD be checked
         correct = false → box should NOT be checked
     ═══════════════════════════════════════════════════════════ */
  function renderChecklist(container, cfg) {
    container.innerHTML = '';
    container.className = 'exercise-container';

    container.appendChild(el('div', 'exercise-prompt', esc(cfg.instruction)));

    /* Optional context block */
    if (cfg.context) {
      var ctxEl = el('blockquote', null, esc(cfg.context));
      ctxEl.style.cssText =
        'border-left:3px solid var(--gold-400);padding:12px 18px;margin:0 0 20px;' +
        'background:rgba(212,168,67,.05);border-radius:0 10px 10px 0;' +
        'color:var(--text-secondary);font-style:italic;line-height:1.7;';
      container.appendChild(ctxEl);
    }

    container.appendChild(el('div', 'exercise-subtext',
      'Check every item that applies, then click Submit to see results.'));

    var list      = el('div', 'checklist');
    var checkData = []; /* { row, getChecked, item } */
    var submitted = false;

    cfg.items.forEach(function (item) {
      var row  = el('div', 'checklist-item');
      var box  = el('span', 'checklist-box');
      var lbl  = el('span', 'checklist-label', esc(item.text));
      var icon = el('span', null);
      icon.style.cssText =
        'display:none;margin-left:10px;font-size:12px;font-weight:700;flex-shrink:0;';

      row.setAttribute('role', 'checkbox');
      row.setAttribute('aria-checked', 'false');
      row.setAttribute('tabindex', '0');
      row.appendChild(box);
      row.appendChild(lbl);
      row.appendChild(icon);

      var checked = false;

      function toggle() {
        if (submitted) return;
        checked = !checked;
        row.classList.toggle('checked', checked);
        row.setAttribute('aria-checked', String(checked));
      }

      row.addEventListener('click', toggle);
      row.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); }
      });

      list.appendChild(row);
      checkData.push({
        row: row, lbl: lbl, icon: icon,
        getChecked: function () { return checked; },
        item: item
      });
    });

    container.appendChild(list);

    var submitBtn = el('button', 'btn btn-primary', 'Submit');
    var scoreEl   = el('div');
    scoreEl.style.display = 'none';
    container.appendChild(submitBtn);
    container.appendChild(scoreEl);

    submitBtn.addEventListener('click', function () {
      if (submitted) return;
      submitted = true;
      submitBtn.disabled = true;

      var correct = 0;
      checkData.forEach(function (cd) {
        var userChecked   = cd.getChecked();
        var shouldBeChecked = cd.item.correct;
        var right = (userChecked === shouldBeChecked);
        if (right) correct++;

        cd.icon.style.display = 'inline';
        if (right) {
          cd.icon.textContent = ' ✓';
          cd.icon.style.color = 'var(--success)';
        } else {
          cd.icon.textContent = shouldBeChecked
            ? ' ← should be checked'
            : ' ← should be unchecked';
          cd.icon.style.color = 'var(--error)';
          cd.lbl.style.color  = 'var(--error)';
        }
      });

      var all = cfg.items.length;
      scoreEl.style.display = 'block';
      scoreEl.className = 'quiz-feedback ' + (correct === all ? 'correct-msg' : 'incorrect-msg');
      scoreEl.style.animation = 'fadeInUp .25s ease';
      scoreEl.innerHTML =
        '<strong>' + correct + ' / ' + all + '</strong> correct.' +
        (correct === all ? ' Perfect!' : ' Review the highlighted items above.');
    });
  }


  /* ═══════════════════════════════════════════════════════════
     6. SCENARIO
         cfg: { situation, options[{text, feedback, isOptimal}] }
     ═══════════════════════════════════════════════════════════ */
  function renderScenario(container, cfg) {
    container.innerHTML = '';
    container.className = 'exercise-container';

    /* Scenario card */
    var card   = el('div', 'scenario-card');
    var hdr    = el('div', 'scenario-header');
    hdr.innerHTML = '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke-linecap="round" stroke-linejoin="round"/></svg> Scenario';
    var body   = el('div', 'scenario-body', esc(cfg.situation));
    card.appendChild(hdr);
    card.appendChild(body);
    container.appendChild(card);

    container.appendChild(el('div', 'exercise-subtext',
      'Read the scenario above, then choose your response.'));

    var choicesEl  = el('div', 'scenario-choices');
    var feedbackEl = el('div', 'scenario-feedback-panel quiz-feedback');
    feedbackEl.style.display = 'none';

    var chosen = false;

    cfg.options.forEach(function (opt, idx) {
      var choice = el('div', 'scenario-choice');
      choice.setAttribute('role', 'button');
      choice.setAttribute('tabindex', '0');

      /* Letter marker */
      var letter = document.createElement('span');
      letter.textContent = String.fromCharCode(65 + idx) + '.';
      letter.style.cssText =
        'font-weight:800;color:var(--text-muted);flex-shrink:0;min-width:20px;font-size:13px;';

      /* Text + optional best badge */
      var textWrap = el('span', null, esc(opt.text));

      if (opt.isOptimal) {
        var badge = el('span', 'badge badge-gold');
        badge.style.cssText = 'margin-left:10px;display:none;vertical-align:middle;';
        badge.innerHTML =
          '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="margin-right:3px"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>Best';
        textWrap.appendChild(badge);
        choice._badge = badge;
      }

      choice.appendChild(letter);
      choice.appendChild(textWrap);
      choicesEl.appendChild(choice);

      function pick() {
        if (chosen) return;
        chosen = true;

        /* Reveal best on all options */
        Array.from(choicesEl.children).forEach(function (c, i) {
          var o = cfg.options[i];
          c.style.cursor = 'default';
          c.setAttribute('tabindex', '-1');
          if (o.isOptimal) {
            c.classList.add('chosen-correct');
            if (c._badge) c._badge.style.display = 'inline-flex';
          }
        });

        choice.classList.add(opt.isOptimal ? 'chosen-correct' : 'chosen-incorrect');

        feedbackEl.style.display = 'block';
        feedbackEl.className =
          'scenario-feedback-panel quiz-feedback ' +
          (opt.isOptimal ? 'correct-msg' : 'incorrect-msg');
        feedbackEl.style.animation = 'fadeInUp .25s ease';
        feedbackEl.innerHTML =
          '<strong>' + (opt.isOptimal ? '✓ Optimal choice.' : '⚠ Not the best choice.') + '</strong>' +
          ' ' + esc(opt.feedback);
      }

      choice.addEventListener('click', pick);
      choice.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
      });
    });

    container.appendChild(choicesEl);
    container.appendChild(feedbackEl);
  }


  /* ═══════════════════════════════════════════════════════════
     7. TIMED CHALLENGE
         cfg: {
           duration: <seconds>,
           phases: [{ time: <seconds from start>, prompt: <string> }]
         }
         Phases appear when elapsed time reaches phase.time.
         Phases sorted ascending by time automatically.
     ═══════════════════════════════════════════════════════════ */
  function renderTimedChallenge(container, cfg) {
    container.innerHTML = '';
    container.className = 'exercise-container';

    var total     = cfg.duration;
    var remaining = total;
    var elapsed   = 0;
    var interval  = null;
    var started   = false;
    var ended     = false;
    var shownUpTo = -1; /* highest phase index shown so far */

    /* Sort phases by time ascending */
    var phases = (cfg.phases || []).slice().sort(function (a, b) { return a.time - b.time; });

    /* ── Timer widget ── */
    var timerWidget = el('div', 'timer-widget');

    var timerLeft = el('div');
    timerLeft.style.cssText = 'display:flex;flex-direction:column;align-items:flex-start;flex-shrink:0;';
    var timerDisplay = el('div', 'timer-display', fmtTime(total));
    var timerLabel   = el('div', 'timer-label',   'Remaining');
    timerLeft.appendChild(timerDisplay);
    timerLeft.appendChild(timerLabel);

    var barWrap = el('div', 'timer-bar-wrap');
    var bar     = el('div', 'timer-bar');
    var barFill = el('div', 'timer-bar-fill');
    barFill.style.width = '100%';
    bar.appendChild(barFill);
    barWrap.appendChild(bar);

    var startBtn = el('button', 'btn btn-primary', 'Start Challenge');

    timerWidget.appendChild(timerLeft);
    timerWidget.appendChild(barWrap);
    timerWidget.appendChild(startBtn);
    container.appendChild(timerWidget);

    /* ── Phases area ── */
    var phasesArea = el('div', 'timed-phases');
    container.appendChild(phasesArea);

    /* ── End state ── */
    var endEl = el('div');
    endEl.style.display = 'none';
    container.appendChild(endEl);

    /* ── Helpers ── */
    function fmtTime(s) {
      var m  = Math.floor(s / 60);
      var ss = s % 60;
      return (m > 0 ? m + ':' : '') + (ss < 10 ? '0' : '') + ss;
    }

    function addPhase(idx) {
      var phase = phases[idx];
      var card  = el('div', 'timed-phase-card glass-card');

      var phaseNum = el('div', 'badge badge-gold');
      phaseNum.style.cssText = 'margin-bottom:10px;display:inline-flex;';
      phaseNum.textContent   = 'Prompt ' + (idx + 1);

      var prompt = el('div', 'exercise-prompt', esc(phase.prompt));
      prompt.style.marginBottom = '12px';

      var ta = document.createElement('textarea');
      ta.className   = 'timed-response-field';
      ta.rows        = 4;
      ta.placeholder = 'Type your response here…';
      ta.setAttribute('aria-label', 'Response to: ' + phase.prompt);
      ta.style.cssText =
        'width:100%;background:rgba(255,255,255,.04);' +
        'border:1px solid var(--border-muted);border-radius:8px;' +
        'padding:12px 14px;color:var(--text-primary);' +
        'font-family:var(--font-sans);font-size:14px;line-height:1.6;' +
        'resize:vertical;outline:none;' +
        'transition:border-color .15s,box-shadow .15s;';

      ta.addEventListener('focus', function () {
        ta.style.borderColor = 'var(--gold-400)';
        ta.style.boxShadow   = '0 0 0 3px rgba(212,168,67,.15)';
      });
      ta.addEventListener('blur', function () {
        ta.style.borderColor = 'var(--border-muted)';
        ta.style.boxShadow   = 'none';
      });

      card.appendChild(phaseNum);
      card.appendChild(prompt);
      card.appendChild(ta);
      phasesArea.appendChild(card);

      /* Keep reference for disabling on end */
      phase._ta = ta;
    }

    /* ── Tick ── */
    function tick() {
      if (remaining <= 0) { endChallenge(); return; }

      remaining--;
      elapsed++;
      timerDisplay.textContent = fmtTime(remaining);
      barFill.style.width = ((remaining / total) * 100) + '%';

      /* Warning at last 25 % */
      if (remaining <= Math.floor(total * 0.25)) {
        timerDisplay.classList.add('warning');
        barFill.classList.add('warning');
      }

      /* Reveal any phase whose start time has been reached */
      for (var i = shownUpTo + 1; i < phases.length; i++) {
        if (elapsed >= phases[i].time) {
          addPhase(i);
          shownUpTo = i;
        } else {
          break; /* phases are sorted, no point continuing */
        }
      }
    }

    /* ── End ── */
    function endChallenge() {
      if (ended) return;
      ended = true;
      clearInterval(interval);
      timerDisplay.textContent = '0:00';
      timerDisplay.classList.add('warning');
      barFill.style.width = '0%';
      startBtn.disabled   = true;
      startBtn.textContent = "Time's Up";

      phases.forEach(function (p) {
        if (p._ta) p._ta.disabled = true;
      });

      endEl.style.display = 'block';
      endEl.className = 'quiz-feedback correct-msg';
      endEl.style.animation = 'fadeInUp .3s ease';
      endEl.innerHTML =
        '<strong>✓ Challenge complete!</strong> ' +
        'Time is up — review your responses above before moving on.';
    }

    /* ── Start button ── */
    startBtn.addEventListener('click', function () {
      if (started) return;
      started = true;
      startBtn.disabled    = true;
      startBtn.textContent = 'Running…';

      /* Show phase(s) that start at t = 0 immediately */
      for (var i = 0; i < phases.length; i++) {
        if (phases[i].time === 0) {
          addPhase(i);
          shownUpTo = i;
        } else {
          break;
        }
      }

      interval = setInterval(tick, 1000);
    });
  }


  /* ═══════════════════════════════════════════════════════════
     EXPORT
     ═══════════════════════════════════════════════════════════ */
  window.Exercises = {
    renderMultipleChoice: renderMultipleChoice,
    renderDragSort:       renderDragSort,
    renderFillBlank:      renderFillBlank,
    renderMatching:       renderMatching,
    renderChecklist:      renderChecklist,
    renderScenario:       renderScenario,
    renderTimedChallenge: renderTimedChallenge
  };

}());
