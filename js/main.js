define(['jquery', './chart', './viewportSelectors'], function ($) {
  window.App.book.on('render', function () {
    var elements = $('.progress .progress-bar');

    function onScroll(event) {
      var inViewport = elements.filter(':in-viewport');
      if (!inViewport.length) {
        return;
      }
      elements = elements.not(inViewport);
      inViewport.progressbar();
      if (!elements.length) {
        $('#scrollview').off('scroll', onScroll);
      }
    }

    if (elements.length) {
      $('#scrollview').bind("scroll", onScroll);
      onScroll();
    }
  });
});
