/* ============================================================================
   SITE SCROLL
   ============================================================================

   WHAT THIS FILE IS FOR
   ---------------------
   Two jobs:

   1. Smooth scrolling. It turns on the "Lenis" smooth scroll library so the
      page glides when you scroll instead of jumping. Before this file existed,
      only the homepage did this and every other page scrolled normally, so the
      site felt inconsistent as you moved between pages.

   2. A single shared way for pages to react to scrolling. Any page that wants
      to move something as you scroll asks this file to tell it, instead of each
      page setting up its own scroll listener.

   IMPORTANT THINGS TO KNOW
   ------------------------
   * If someone has turned on "Reduce Motion" in their phone or computer
     settings, smooth scrolling is skipped entirely. That setting exists for
     people who get motion sick or have vestibular disorders, and ignoring it
     can genuinely make someone ill. Never remove that check.

   * On phones and tablets, Lenis deliberately does not take over scrolling.
     Touch scrolling with a finger already feels good, and hijacking it makes a
     page feel sluggish and unresponsive. Scroll-driven animations still run.

   * If the Lenis library fails to load (bad wifi, blocked CDN), everything
     still works. The page just scrolls normally.

   HOW TO ADD THIS TO A NEW PAGE
   -----------------------------
   Put these two lines at the bottom of the page, just before </body>:

       <script src="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js"></script>
       <script src="site-scroll.js"></script>

   HOW TO USE IT FROM A PAGE
   -------------------------
   To move something as the visitor scrolls:

       SiteScroll.onScroll(function (y) {
         // y is how far down the page we are, in pixels
         myElement.style.transform = 'translateY(' + (y * 0.2) + 'px)';
       });

   ============================================================================ */

window.SiteScroll = (function () {
  'use strict';

  /* Does this person prefer less movement? Checked once at load, and again if
     they change the setting without reloading the page. */
  var reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var prefersReducedMotion = reduceMotionQuery.matches;

  /* Is this a touch device (phone or tablet) rather than a mouse device?
     "hover: none" is the browser's way of saying there is no mouse pointer. */
  var isTouch = window.matchMedia('(hover: none)').matches;

  var lenis = null;

  /* Everyone who asked to be told about scrolling. */
  var subscribers = [];
  var lastScrollY = 0;

  function notify(y) {
    lastScrollY = y;
    for (var i = 0; i < subscribers.length; i++) {
      try {
        subscribers[i](y);
      } catch (err) {
        /* One broken effect must never stop the others from running. */
      }
    }
  }

  /* ---- Smooth scrolling ------------------------------------------------- */

  function startSmoothScroll() {
    /* Respect the Reduce Motion setting. */
    if (prefersReducedMotion) return;

    /* The library did not load. Not a problem, the page scrolls normally. */
    if (typeof window.Lenis === 'undefined') return;

    try {
      lenis = new window.Lenis({
        duration: 1.2,
        easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },

        /* syncTouch false means: do not take over finger scrolling on phones.
           Native touch scrolling already feels right, and overriding it makes
           the page feel like it is fighting you. */
        syncTouch: false
      });

      /* Lenis moves the page by setting the scroll position every frame. If
         the page's CSS also says `html { scroll-behavior: smooth }` (several
         of our stylesheets do), the browser tries to animate each of those
         60-a-second jumps on its own, and the two fight. Measured before this
         fix: asked to scroll 1500px, the page lagged up to 1447px behind and
         had moved only about 40px after a second and a half. That was the
         "scroll does nothing, then jumps" feeling on every page but the
         homepage. Lenis puts the class "lenis" on <html> while it runs, so
         this switches the browser's smoothing off exactly then, whatever any
         other stylesheet says. Lenis's own CSS file does the same thing, but
         it also makes every embedded frame (calendar, PDFs, Google Doc)
         unclickable, so only the parts we need are copied here. */
      if (!document.getElementById('site-scroll-css')) {
        var css = document.createElement('style');
        css.id = 'site-scroll-css';
        css.textContent =
          'html.lenis { scroll-behavior: auto !important; }' +
          'html.lenis, html.lenis body { height: auto; }' +
          '.lenis.lenis-stopped { overflow: hidden; }';
        /* Deliberately not copied from Lenis's CSS: overscroll-behavior on the
           protected boxes. The photo carousel is one of them, and that rule
           stopped an up-or-down scroll over it from ever reaching the page,
           so the Media page froze whenever the cursor was over the photos. */
        document.head.appendChild(css);
      }

      /* The library needs to be nudged once per frame to do its work. */
      (function raf(time) {
        if (!lenis) return;
        lenis.raf(time);
        requestAnimationFrame(raf);
      })(0);

      lenis.on('scroll', function (e) { notify(e.scroll); });
    } catch (err) {
      /* Something went wrong setting it up. Fall through to normal scrolling. */
      lenis = null;
    }
  }

  /* ---- Normal scroll listening ------------------------------------------
     This runs whenever Lenis is NOT driving, which covers three cases: Reduce
     Motion is on, the library failed to load, or we are on a phone where Lenis
     deliberately stays out of the way. */

  var ticking = false;

  function onNativeScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      notify(window.pageYOffset || document.documentElement.scrollTop || 0);
    });
  }

  window.addEventListener('scroll', onNativeScroll, { passive: true });

  /* ---- Protect scrollable boxes inside the page --------------------------

     Some parts of the site scroll on their own: the portal's left-hand index
     rail, the photo carousel on the media page, the search results dropdown,
     and any wide code block. Smooth scrolling does not know about these, so
     without help it would scroll the whole page when you use a mouse wheel
     over one of them, and the inner box would never move.

     Lenis skips anything marked with a "data-lenis-prevent" attribute. Rather
     than hand-listing every such box (a list that goes stale the moment someone
     adds a new one), this finds them automatically: any element the browser
     reports as scrollable, that actually has more content than fits, gets
     marked. It reruns whenever the page content changes, so parts of the site
     that are built by JavaScript after load are covered too. */

  function markScrollableAreas() {
    var all = document.querySelectorAll('div, section, aside, nav, pre, ul, ol, main');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el.hasAttribute('data-lenis-prevent')) continue;
      var cs = window.getComputedStyle(el);
      var scrollsY = (cs.overflowY === 'auto' || cs.overflowY === 'scroll') &&
                     el.scrollHeight > el.clientHeight + 1;
      var scrollsX = (cs.overflowX === 'auto' || cs.overflowX === 'scroll') &&
                     el.scrollWidth > el.clientWidth + 1;
      if (scrollsY || scrollsX) el.setAttribute('data-lenis-prevent', '');
    }
  }

  var markTimer = null;
  function scheduleMarking() {
    clearTimeout(markTimer);
    markTimer = setTimeout(markScrollableAreas, 200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleMarking);
  } else {
    scheduleMarking();
  }
  window.addEventListener('load', scheduleMarking);

  if (window.MutationObserver) {
    new MutationObserver(scheduleMarking).observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  /* ---- Start up ---------------------------------------------------------- */

  startSmoothScroll();

  /* If someone flips the Reduce Motion setting while the page is open, honour
     it straight away rather than making them reload. */
  function onMotionPreferenceChange(e) {
    prefersReducedMotion = e.matches;
    if (prefersReducedMotion && lenis) {
      lenis.destroy();
      lenis = null;
    } else if (!prefersReducedMotion && !lenis) {
      startSmoothScroll();
    }
  }
  if (reduceMotionQuery.addEventListener) {
    reduceMotionQuery.addEventListener('change', onMotionPreferenceChange);
  } else if (reduceMotionQuery.addListener) {
    reduceMotionQuery.addListener(onMotionPreferenceChange);
  }

  /* ---- What other pages are allowed to use ------------------------------- */

  return {
    /* Ask to be told the scroll position whenever it changes. */
    onScroll: function (callback) {
      if (typeof callback !== 'function') return;
      subscribers.push(callback);
      /* Tell the new subscriber where we are right now, so whatever it draws
         is correct immediately instead of only after the first scroll. */
      callback(lastScrollY);
    },

    /* True on phones and tablets. Pages use this to decide whether to run a
       mouse-following effect or its scroll-driven stand-in. */
    isTouch: isTouch,

    /* True when the visitor has asked for less movement. Pages should skip
       decorative animation entirely when this is true. */
    prefersReducedMotion: function () { return prefersReducedMotion; },

    /* Re-scan the page for scrollable boxes. Runs automatically when the page
       changes, so you should not normally need to call this yourself. */
    refreshScrollAreas: markScrollableAreas,

    /* The Lenis instance, or null. Only needed for advanced use such as
       scrollTo. Always check it is not null before using it. */
    instance: function () { return lenis; }
  };
})();
