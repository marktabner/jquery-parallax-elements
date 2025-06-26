/*!
 * jQuery Parallax InView Plugin
 * Author: Mark Tabner
 * License: MIT
 * Description: Parallax any element on a page, at any viewport size you like
 */

(function ($) {
  $.fn.parallaxInView = function (options) {
    const settings = $.extend({
      minWidth: 576,       // Minimum window width to enable effect
      offset: 100,         // Viewport threshold for triggering
      speedAttr: 'speed'   // Data attribute name for speed
    }, options);

    function isInView(element) {
      const elementTop = $(element).offset().top;
      const elementBottom = elementTop + $(element).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();
      return elementTop < viewportBottom - settings.offset && elementBottom > viewportTop;
    }

    function applyParallax($elements) {
      const scrollTop = $(window).scrollTop();

      $elements.each(function () {
        const $el = $(this);
        if (!isInView($el)) return;

        const elTop = $el.offset().top;
        const speed = parseFloat($el.data(settings.speedAttr)) || 0.08;
        const shift = (elTop - scrollTop) * speed;

        $el.css("transform", "translateY(" + shift + "px)");
      });
    }

    const $targetElements = this;

    function init() {
      if ($(window).width() > settings.minWidth) {
        $(window).on('scroll.parallaxInView resize.parallaxInView', () => {
          applyParallax($targetElements);
        });
        applyParallax($targetElements);
      }
    }

    init();

    return this;
  };
})(jQuery);
