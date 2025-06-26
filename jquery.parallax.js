/*!
 * jQuery Parallax InView Plugin
 * Author: Mark Tabner
 * License: MIT
 * Description: Adds in-view-based parallax scrolling to elements with a data-speed attribute.
 */

(function ($) {
  $.fn.parallaxInView = function (options) {
    const settings = $.extend({
      minWidth: 992,
      offset: 100,
      speedAttr: 'speed'
    }, options);

    function isInView(element, offset = 100) {
      const elementTop = $(element).offset().top;
      const elementBottom = elementTop + $(element).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();
      return elementTop < viewportBottom - offset && elementBottom > viewportTop;
    }

    function applyParallax($elements) {
      const scrollTop = $(window).scrollTop();

      $elements.each(function () {
        const $el = $(this);
        if (!isInView($el, settings.offset)) return;

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
