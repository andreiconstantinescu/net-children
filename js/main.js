define([
  '../addons/lfa-backstage/js/main',
  '../addons/lfa-exercises/js/main'
], function(Backstage, Exercises) {
  'use strict';
  window.Exercises = Exercises;
  
  window.App.book.on('render', function() {
    window.firstTimeDoneMessages = [
      'Bravo!',
      'Felicitări!',
      'Excelent!',
      'Corect!',
      'Super!',
      'Impecabil!'
    ];

    if(!window.wasWelcomed) {
      window.App.trigger('avatar:mood', {
        mood: 'smile',
        message: 'Apasă pe mine pentru a afla cum se folosește acest manual!', 
        interval: 5000,
        persistent: false,
        icon: 'fa-smile-o'
      });
      window.wasWelcomed = true;
    }

    // Vocabulary definitions
    var definitions = {};

    function addDef(name, definition, opts) {
      var item = definitions[name];
      if (item == undefined)
          definitions[name] = item = []
      opts = opts || {}
      opts.definition = definition
      item.push(opts);
    };

    // Definitii aici
    // addDef("nume cuvant", "definitie", { video: "url video optional" });
    addDef("5", "Facem această precizare dată fiind rapida dezvoltare a internetului mobil la care asistăm. Astfel spre exemplu, de la culegerea datelor pentru ancheta cantitativă (mai-iunie 2013) la culegerea datelor în ancheta calitativă (decembrie 2013 - februarie 2014), situația se schimbase dramatic datorită cadourilor de sărbători, o învățătoare de grupă pregătitoare afirmând: „Deci dacă eu vă spun că le-am spus (părinților-nAV) să restricționeze și accesul și să înceteze cu astfel de recompense și de Crăciun au primit 3 sferturi tablete…” (învățătoare, București).");
    // Glossary
    var glossary = $(".glossary");
    if (glossary.length) {
      html = ""
      var words = _.keys(definitions);
      words.sort();
      for (var i = 0; i < words.length; i++) {
        var count = definitions[words[i]].length;
        for (var j = 0; j < count; j++) {
          html += window.getMixin('definitie')(words[i], j);
        }
      }
      glossary.append(html);
    }

    // Mixin definitie
    $('.definitie-pair').each(function(idx, el) {
      el = $(el);
      var def = undefined;
      var word = el.data('cuvant');
      try {
        def = definitions[word][parseInt(el.data('index'))];
      } catch(ex) {}
      if (def == undefined)
        def = { definition: "word not found" };
      el.find('.cuvant').html(word);
      el.find('.definitie').html(def.definition);

      if (def.video == undefined)
        el.find('video').remove();
      else {
        var m4v = def.video;
        var ogv = m4v.replace(".m4v",".ogv");
        var webm = m4v.replace(".m4v",".webm");
        var vid = el.find('video');
        vid.removeClass('hidden');
        vid.find('source[type="video/mp4"]').attr('src', m4v);
        vid.find('source[type="video/webm"]').attr('src', webm);
        vid.find('source[type="video/ogg"]').attr('src', ogv);
      }
    });

    // Mixin vocword
    var current_popover = null;

    $('.vocword').click(function(e) {
      var el = $(this);
      var def = undefined;
      var word = el.data('cuvant');
      try {
        def = definitions[word][parseInt(el.data('index'))];
      } catch(ex) {}
      if (def == undefined)
        def = { definition: "word not found" };
      if (el.is(current_popover))
        return;
      el.popover({
        content: def.definition,
        placement: "auto bottom",
        title: word,
        trigger: "manual",
      });
      el.popover("show");
      current_popover = el;
      e.stopPropagation();
      e.preventDefault();
    });

    $(document).mouseup(function(e) {
      if (current_popover == null) return;
      if (!current_popover.is(e.target) && current_popover.has(e.target).length === 0) {
        current_popover.popover("destroy");
        current_popover = null;
      }
    });
  });
});
