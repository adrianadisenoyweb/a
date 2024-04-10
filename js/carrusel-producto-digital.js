(function(b) {
    b.fn.bcSwipe = function(c) {
      var f = { threshold: 50 };
      c && b.extend(f, c);
      this.each(function() {
        function c(a) {
          1 == a.touches.length &&
            ((d = a.touches[0].pageX),
            (e = !0),
            this.addEventListener("touchmove", g, !1));
        }
        function g(a) {
          e &&
            ((a = d - a.touches[0].pageX),
            Math.abs(a) >= f.threshold &&
              (h(), 0 < a ? b(this).carousel("next") : b(this).carousel("prev")));
        }
        function h() {
          this.removeEventListener("touchmove", g);
          d = null;
          e = !1;
        }
        var e = !1,
          d;
        "ontouchstart" in document.documentElement &&
          this.addEventListener("touchstart", c, !1);
      });
      return this;
    };
  })(jQuery);
  
  $(document).ready(function() {
    $(".carousel").bcSwipe({ threshold: 50 });
  });
  