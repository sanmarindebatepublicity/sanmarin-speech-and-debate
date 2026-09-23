/* Portal search — a find-on-this-page pointer, in the spirit of the search
   box in an application's Help menu: type, pick a match, and the page scrolls
   there and briefly highlights it. It indexes what is actually rendered, so
   content that arrives later (announcements, awards) is searchable the moment
   it exists — the index is rebuilt on every keystroke, never cached.

   Expects: <input id="portal-search"> with a sibling <div id="portal-search-results">.
   Styles live in portal-styles.css under "PORTAL SEARCH". */

(function () {
  'use strict';

  var input   = document.getElementById('portal-search');
  var listbox = document.getElementById('portal-search-results');
  if (!input || !listbox) return;

  /* What counts as a findable thing, and what to call the group it is in. */
  var TARGET_SELECTOR = [
    '.hub-section-title', '.announcement-title', '.award-name', '.bylaws-title',
    '.resource-track-title', '.pdf-name', '.tool-card-title', '.doc-section h2',
    '.unit-title', '.lesson-row',
    '.tk-section-title', '.tk-res-title', '.tk-book-title', '.tk-chapter-name'
  ].join(', ');

  function sectionOf(el) {
    var sec = el.closest('section, .hub-section, .resource-track, .doc-section');
    if (!sec) return 'Page';
    var eyebrow = sec.querySelector('.hub-section-eyebrow, .resource-track-eyebrow');
    var title   = sec.querySelector('.hub-section-title, .resource-track-title, h2');
    if (eyebrow && eyebrow.textContent.trim()) return eyebrow.textContent.trim();
    if (title && title.textContent.trim())     return title.textContent.trim();
    return 'Page';
  }

  function collect(query) {
    var q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    var out = [];
    document.querySelectorAll(TARGET_SELECTOR).forEach(function (el) {
      if (listbox.contains(el)) return;
      var text = (el.textContent || '').trim().replace(/\s+/g, ' ');
      if (!text || text.toLowerCase().indexOf(q) === -1) return;
      out.push({ el: el, label: text.length > 70 ? text.slice(0, 67) + '…' : text, group: sectionOf(el) });
    });
    return out.slice(0, 12);
  }

  var active = -1;
  var current = [];

  function close() {
    listbox.hidden = true;
    listbox.innerHTML = '';
    input.setAttribute('aria-expanded', 'false');
    active = -1;
    current = [];
  }

  function jump(item) {
    close();
    input.blur();
    /* A match inside a collapsed section (the textbook's chapter list) has
       no position until it is shown, so open it first. */
    var folded = item.el.closest('details');
    if (folded && !folded.open) folded.open = true;
    var ls = window.SiteScroll && SiteScroll.instance();
    if (ls) {
      var r = item.el.getBoundingClientRect();
      ls.scrollTo(item.el, { offset: -(window.innerHeight / 2 - r.height / 2) });
    } else {
      item.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    /* Highlight the containing card when there is one, so the pointer is
       visible at a glance rather than underlining three words of heading. */
    var box = item.el.closest(
      '.tk-chapter, .tk-book, .tk-res-card, .announcement-card, .award-card, .bylaws-card, .pdf-card, .doc-section, .hub-section'
    ) || item.el;
    box.classList.add('search-hit');
    setTimeout(function () { box.classList.remove('search-hit'); }, 2200);
  }

  function render(items) {
    if (!items.length) { close(); return; }
    current = items;
    active = -1;
    listbox.innerHTML = '';
    var lastGroup = null;
    items.forEach(function (item, i) {
      if (item.group !== lastGroup) {
        var g = document.createElement('div');
        g.className = 'psr-group';
        g.textContent = item.group;
        listbox.appendChild(g);
        lastGroup = item.group;
      }
      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'psr-item';
      row.setAttribute('role', 'option');
      row.dataset.index = String(i);
      row.textContent = item.label;
      row.addEventListener('click', function () { jump(item); });
      listbox.appendChild(row);
    });
    listbox.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  function move(delta) {
    var rows = listbox.querySelectorAll('.psr-item');
    if (!rows.length) return;
    active = (active + delta + rows.length) % rows.length;
    rows.forEach(function (r, i) { r.classList.toggle('psr-active', i === active); });
    rows[active].scrollIntoView({ block: 'nearest' });
  }

  input.addEventListener('input', function () { render(collect(input.value)); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (active >= 0 && current[active]) jump(current[active]);
      else if (current.length) jump(current[0]);
    }
    else if (e.key === 'Escape') { close(); input.blur(); }
  });
  document.addEventListener('click', function (e) {
    if (!input.contains(e.target) && !listbox.contains(e.target)) close();
  });
})();
