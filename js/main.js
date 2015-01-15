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

    $('.textTooltip').each(function (idx, el) {
      var $el = $(el);
      var bibliography = window.bibliography[$el.attr("id")];
      var content = '<div>'+ bibliography.author + ', <em>' + bibliography.title + '</em>(' + bibliography.location + ': ' + bibliography.publisher + (bibliography.year ? (', ' + bibliography.year) : '') + ') ' + (bibliography.pages ? (bibliography.pages + ', ') : '') + (bibliography.extra ? bibliography.extra : '') + '</div>';
      $el.attr('data-content', content).html(bibliography.ref);
    }).popover({html: true});
  });
});

window.bibliography = {
  livingstone2009: {
    author: "Livingstone, S.",
    ref: "Livingstone, 2009",
    title: "Children and the Internet: Great expectations, challenging realities.",
    year: "2009",
    location: "Cambridge",
    publisher: "Polity",
  },
  ito2009: {
    author: "Ito, M et al.",
    ref: "Ito et al., 2009",
    title: "Hanging out, messing around, and geeking out: Kids living and learning with new media.",
    location: "Cambridge, MA",
    publisher: "MIT Press"
  },
  hjortgoggin2009: {
    author: "Hjorth, L. & Goggin, G. (2009).",
    ref: "Hjorth & Goggin, 2009",
    title: "Mobile technologies: From telecommunications to media.",
    location: "London",
    publisher: "Routledge"
  },
  goggin2010: {
    author: "Goggin, G. (2010).",
    ref: "Goggin 2010",
    title: "Global mobile media.",
    location: "New-York",
    publisher: "Routledge"
  },
  livingstone2011: {
    author: "Livingstone, S., Haddon, L., Görzig, A., & Ólafsson, K. (2011).",
    ref: "Livingstone et al., 2011",
    title: "Risks and safety on the internet: The perspective of European children. Full findings. ",
    location: "London",
    publisher: "LSE, EU Kids Online"
  },
  oswell2008: {
    author: "Oswell, D. (2008).",
    ref: "Oswell, 2008",
    title: "Media and communications regulation and child protection: An overview of the field. In S. Livingstone & K. Drotner (eds) The international handbook of children, media and culture (pp. 475-492).",
    location: "London",
    publisher: "Sage"
  },
  eucommission2008: {
    author: "European Commission (2008)",
    ref: "European Commission, 2008",
    title: "Towards a safer use of the Internet for children in the EU: A parents’ perspective.",
    location: "Luxembourg",
    publisher: "European Commission"
  },
  haddon2012: {
    author: "Haddon, L. (2012)",
    ref: "Haddon, 2012",
    title: "Parental mediation of internet use: Evaluating family relationships. In E. Loos, L. Haddon and E. Mante-Meijer (Eds) (2012) Generational use of new media (pp. 13-30).",
    location: "Aldershot",
    publisher: "Ashgate"
  },
  duragerlivingstone2012: {
    author: "Dürager, A. & Livingstone, S. (2012).",
    ref: "Dürager & Livingstone, 2012",
    title: "How can parents support children’s internet safety? ",
    location: "London",
    publisher: "EU Kids Online"
  },
  greenhaddon2009: {
    author: "Green, N. & Haddon, L. (2009)",
    ref: "Green & Haddon, 2009",
    title: "Mobile communications: an introduction to new media.",
    location: "Oxford",
    publisher: "Berg"
  },
  helsper2013: {
    author: "Helsper, E., Kalmus, V., Hasebrink, U., Sagvari, B. & de Haan, J. (2013).",
    ref: "Helsper et al., 2013",
    title: "Country classification: Opportunities, risks, harm and parental mediation.",
    location: "London",
    publisher: "EU Kids Online"
  },
  livingstonehaddon2009: {
    author: "Livingstone, S. & Haddon, L. (eds) (2009).",
    ref: "Livingstone & Haddon, 2009",
    title: "Kids Online. Opportunities and risks for children.",
    location: "Bristol",
    publisher: "Policy Press"
  },
  mascheroniolafsson2014: {
    author: "Mascheroni, G. and Ólafsson, K. (2014).",
    ref: "Mascheroni & Olafsson, 2014",
    title: "Net Children Go Mobile: risks and opportunities. Second Edition.",
    location: "Milano",
    publisher: "Educatt"
  },
  haddonvincent2014: {
    author: "Haddon, L. and Vincent, J. (eds.) (2014).",
    ref: "Haddon & Vincent, 2014",
    title: "European children and their carers’ understanding of use, risks and safety issues relating to convergent mobile media. Report D4.1. ",
    location: "Milano",
    publisher: "Unicatt"
  },
  petervalkenburg2006: {
    author: "Peter J. & Valkenburg P. M. (2006).",
    ref: "Peter & Valkenburg, 2006",
    title: "Adolescents’ Internet Use: Testing the ‘disappearing Digital Divide’ Versus the ‘emerging Digital Differentiation’ Approach.",
    location: "Poetics, 34(4-5)",
    publisher: "293- 305"
  },
  livingstonebovill2001: {
    author: "Livingstone, S. & Helsper, E.J. (2007).",
    ref: "Livingstone & Bovill, 2001",
    title: "Children and their changing media environment: A European comparative study.",
    location: "New Jersey, NJ",
    publisher: "Lawrence Erlbaum Associates, Inc"
  },
  livingstonehelsper2007: {
    author: "Livingstone, S. & Bovill, M. (2001).",
    ref: "Livingstone & Helsper, 2007",
    title: "Gradations in digital inclusion: children, young people and the digital divide. New Media & Society,9, 671-696."
  },
  livingstonehasebrinkgorzig2012: {
    author: "Livingstone, S., Hasebrink, U. & Görzig, A. (2012).",
    ref: "Livingstone, Hasebrink & Görzig, 2012",
    title: "Towards a general model of determinants of risks and safety. In S. Livingstone, L. Haddon, & A. Görzig (eds) Children, risk and safety on the internet (pp. 323-339). ",
    location: "Bristol",
    publisher: "Policy Press"
  }
};