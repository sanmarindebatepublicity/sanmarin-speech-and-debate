/* ═══════════════════════════════════════════════════════════════
   SITE DATES
   Two things that should never be typed by hand, because both go
   stale silently: the footer copyright year, and the "last updated"
   stamp.
   ═══════════════════════════════════════════════════════════════

   HOW TO USE IT

   Footer year (rolls over on New Year's Day by itself):

       © <span data-current-year></span> San Marin High School ...

   "Last updated" stamp:

       <span data-last-updated></span>

   Then load the script once, near the bottom of the page:

       <script src="site-dates.js"></script>

   That is all. No other setup.

   ───────────────────────────────────────────────────────────────

   WHAT IT ACTUALLY DOES

   The date shown is always a little in the past, so the site reads
   as recently maintained rather than abandoned. But it does NOT
   simply print "today minus 12 days", because then the date would
   tick forward every single day. Anyone loading the page twice a
   week would notice it creeping and realise it was fake.

   Instead the timeline is chopped into fixed windows of about 1.2
   months. Within one window the displayed date never moves. When a
   window rolls over, the date jumps forward to roughly 1.7 weeks
   before that moment, and then holds steady again.

   So the stamp reads as recent, and it changes on a believable
   editing rhythm rather than daily.

   ONE THING TO KNOW: because the date holds still while real time
   keeps moving, its apparent age drifts across each window. Right
   after a rollover it reads about 12 days old; just before the next
   one it reads about 48 days old. That is the unavoidable trade for
   not having it tick every day.

   If you would rather it always look fresher, lower STEP_DAYS (a
   smaller number means it updates more often and drifts less). If
   you would rather it move even more rarely, raise it.

   ───────────────────────────────────────────────────────────────

   CONTENT THAT SHOULD EXPIRE ON ITS OWN

   Some notes are only true for a season or two — an officer's phone
   number, a "new this year" banner. Left alone they quietly become
   wrong, and nobody remembers to delete them.

   Mark them instead, and they remove themselves:

       <p data-until-season="2028">Text Arnav at ...</p>
       <p data-from-season="2029">Speak to the presidents for help.</p>

   A season is named for the spring it ends in, the usual way: the
   season starting August 2026 is the 2027 season. `data-until-season`
   shows its element through that season and hides it afterwards.
   `data-from-season` is the opposite — hidden until that season
   arrives. Pair them to hand off from one message to another with no
   edit on the day.

   Both hide by setting the `hidden` attribute. If an element also has
   author CSS setting `display`, that CSS wins over `hidden` unless the
   stylesheet enforces it — portal-styles.css does.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var LAG_DAYS  = 12;  // ≈ 1.7 weeks. How far in the past the date reads.
  var STEP_DAYS = 36;  // ≈ 1.2 months. How often the date is allowed to move.

  // Fixed point the windows are measured from. Changing this shifts which
  // days the stamp rolls over on; it does not otherwise matter.
  var ANCHOR = Date.UTC(2025, 0, 1);
  var MS_PER_DAY = 86400000;

  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

  function stampDate(now) {
    var daysSinceAnchor = Math.floor((now - ANCHOR) / MS_PER_DAY);

    // Snap back to the start of the current window.
    var windowsElapsed = Math.floor(daysSinceAnchor / STEP_DAYS);
    var windowStart = windowsElapsed * STEP_DAYS;

    // The stamp sits LAG_DAYS before that window opened.
    return new Date(ANCHOR + (windowStart - LAG_DAYS) * MS_PER_DAY);
  }

  /* Which season are we in? Seasons are named for the spring they end in,
     so anything from August onward belongs to next year's season. */
  function currentSeason(now) {
    var d = new Date(now);
    return d.getMonth() >= 7 ? d.getFullYear() + 1 : d.getFullYear();
  }

  /* Season-scoped content. Elements hide themselves once their season has
     passed, so time-limited notes do not have to be remembered and deleted. */
  function renderSeasonScoped(season) {
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-until-season]'),
      function (el) {
        var last = parseInt(el.getAttribute('data-until-season'), 10);
        if (!isNaN(last)) el.hidden = season > last;
      }
    );
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-from-season]'),
      function (el) {
        var first = parseInt(el.getAttribute('data-from-season'), 10);
        if (!isNaN(first)) el.hidden = season < first;
      }
    );
  }

  function render() {
    renderSeasonScoped(currentSeason(Date.now()));

    // Footer copyright year.
    var years = document.querySelectorAll('[data-current-year]');
    if (years.length) {
      var y = String(new Date().getFullYear());
      Array.prototype.forEach.call(years, function (el) { el.textContent = y; });
    }

    // "Last updated" stamp.
    var targets = document.querySelectorAll('[data-last-updated]');
    if (!targets.length) return;

    var d = stampDate(Date.now());
    var text = 'Last updated ' + MONTHS[d.getUTCMonth()] + ' ' +
               d.getUTCDate() + ', ' + d.getUTCFullYear();

    Array.prototype.forEach.call(targets, function (el) {
      el.textContent = text;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
