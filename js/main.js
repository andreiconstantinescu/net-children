define(['jquery', './chart'], function ($) {
  window.App.book.on('render', function () {
    $('.progress .progress-bar').progressbar();
  });
});
  WebFontConfig = {
    google: { families: [ 'Source+Sans+Pro::latin,latin-ext', 'Exo:400,700:latin,latin-ext' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();