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
      var content = '<div>'+ bibliography.author + ', <em>' + (bibliography.title ? bibliography.title  : '') + '</em>(' + (bibliography.location ? (bibliography.location + ': ') : '') + (bibliography.publisher ? bibliography.publisher : '') + (bibliography.year ? (', ' + bibliography.year) : '') + ') ' + (bibliography.pages ? (bibliography.pages + ', ') : '') + (bibliography.extra ? bibliography.extra : '') + '</div>';
      $el.attr('data-content', content).html(bibliography.ref);
    }).popover({html: true});

    $('.footnote').each(function (idx, el) {
      var $el = $(el);
      var content = window.footnotes[$el.data("id")];
      var template = '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content footnote-content"></div></div>';
      $el.attr('data-content', content).attr("data-template", template).find("a").html("*");
    }).popover({html: true});
  });
});

window.footnotes = {
  1: "Trebuie menționat că nu suntem interesați doar de cei care dețin astfel de dispozitive mobile, ci și de cei care le folosesc fără a le deține personal (e.g. cei care folosesc tablete în comun).",
  2: "Vezi www.ictcoalition.eu ",
  3: "Din motive de economie de spațiu nu vom cita de fiecare dată Raportul mai sus menționat, asumând că cititorul va avea în vedere nota de mai sus.",
  4: "Pentru mai multe amănunte despre cum a avut loc cercetarea calitativă vezi (Haddon, L. and Vincent, J. (eds.) (2014))",
  5: "Facem această precizare dată fiind rapida dezvoltare a internetului mobil la care asistăm. Astfel spre exemplu, de la culegerea datelor pentru ancheta cantitativă (mai-iunie 2013) la culegerea datelor în ancheta calitativă (decembrie 2013 - februarie 2014), situația se schimbase dramatic datorită cadourilor de sărbători, o învățătoare de grupă pregătitoare afirmând: „Deci dacă eu vă spun că le-am spus (părinților-nAV) să restricționeze și accesul și să înceteze cu astfel de recompense și de Crăciun au primit 3 sferturi tablete…” (învățătoare, București).",
  6: "Eșantionul a fost construit pentru a fi reprezentativ național la nivelul copiilor, nu și al părinților.",
  7: "În ciuda dezbaterii care a apărut la un moment dat în spațiul public despre ‘moartea Facebook-ului’, dezbatere care a fost generată de interpretarea eronată de către media a datelor cercetării Global Social Media Impact Study.<a href='http://gsmis.org/' target='_blank'> http://gsmis.org </a>",
  8: "Din nou, atragem atenția că aceste practici de comunicare sunt într-o dinamică accelerată. Astfel, de la momentul culegerii datelor din cercetarea cantitativă până la sfârșitul perioadei de culegere a datelor în cercetarea calitativă, deja mulți copii foloseau zilnic, în paralel cu Facebook-ul, Watsapp și Snapchat. ",
  9: "Pentru datele europene, vezi Ólafsson et al., 2013.",
  10: "În ancheta EU Kids Online copiii au fost întrebați dacă “au văzut sau au primit mesaje sexuale”. În Net Children Go Mobile am exclus cuvântul “văzut” date fiind posibilele confuzii create între sexting-mesaje sexuale si pornografie- a viziona imagini cu caracter sexual.",
  11: "Textul exact care introducea întrebările respective în proiectul EU Kids Online era următorul: ‘În ultimul an ai văzut o mulțime de imagini sub formă de fotografii sau filmulețe, dintre care unele au fost poate cu caracter sexual – cum ar fi persoane dezbrăcate sau persoane făcând sex’. În Net Children Go Mobile formularea a fost schimbată în ‘persoane dezbrăcate aflate în ipostaze sexuale’ deoarece în urma testării cognitive s-a constat că în unele culturi imagini reprezentând persoane dezbrăcate nu sunt neapărat asociate pornografiei. ",
  12: "Pentru spargerea conturilor de Facebook, a apărut deja un termen care leagă „rape” (a viola) de Facebook, dând Frape. ",
  13: "Datorită rotunjirilor, procentul afișat pare să fie mai mare de 100%. Nu este greșeală de calcul, ci doar de afișaj. ",
  14:"Media convergente (e.g. smartphone, tabletă) denumesc acele tehnologii ce reunesc media tradiționale (de tip carte, fotografie, radio) cu media digitale (caracterizate prin interactivitate și caracter social) redefinindu-le pe cele dintâi. Henry Jenkins, în cartea sa din 2006 'Convergence Culture: Where Old and New Media Collide', este cel care folosește pentru prima dată termenul de 'cultură convergentă' pentru a descrie cultura tinerilor unde vechile și noile media se intersectează și se transformă reciproc.",
  15: "din 11 abilități testate"
};

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
    author: "Livingstone, S. & Bovill, M. (2001). ",
    ref: "Livingstone & Bovill, 2001",
    title: "Children and their changing media environment: A European comparative study.",
    location: "New Jersey, NJ",
    publisher: "Lawrence Erlbaum Associates, Inc"
  },
  livingstonehelsper2007: {
    author: "Livingstone, S. & Helsper, E.J. (2007).",
    ref: "Livingstone & Helsper, 2007",
    title: "Gradations in digital inclusion: children, young people and the digital divide. New Media & Society,9, 671-696."
  },
  livingstonehasebrinkgorzig2012: {
    author: "Livingstone, S., Hasebrink, U. & Görzig, A. (2012).",
    ref: "Livingstone, Hasebrink & Görzig, 2012",
    title: "Towards a general model of determinants of risks and safety. In S. Livingstone, L. Haddon, & A. Görzig (eds) Children, risk and safety on the internet (pp. 323-339). ",
    location: "Bristol",
    publisher: "Policy Press"
  },
  lenhart2010: {
    author: "Lenhart, A., Ling, R., Campbell, S., & Purcell, K. (2010).",
    ref: "Lenhart et al., 2010",
    title: "Teens and mobile phones. ",
    location: "Washington, DC",
    publisher: "Pew Research Center"
  },
  lingbertel2013: {
    author: "Ling, R. & Bertel, T. (2013).",
    ref: "Ling & Bertel, 2013",
    title: "Mobile communication culture among children and adolescents. In D. Lemish (ed.) The Routledge international handbook of children, adolescents and media (pp. 127-133). ",
    location: "London",
    publisher: "Routledge"
  },
  ling2008: {
    author: "Ling, R. (2008).",
    ref: "Ling, 2008",
    title: "New tech, new ties. How mobile communication is reshaping social cohesion. ",
    location: "Cambridge, MA",
    publisher: "MIT Press"
  },
  ling2012: {
    author: "Ling, R. (2012).",
    ref: "Ling, 2012",
    title: "Taken for grantedness. The embedding of mobile communication into society. ",
    location: "Cambridge, MA",
    publisher: "MIT Press"
  },
  matsuda2005: {
    author: "Matsuda, M. (2005).",
    ref: "Matsuda, 2005",
    title: "Mobile communication and selective sociality. In M. Ito, D. Okabe, & M. Matsuda (eds) Personal, portable, pedestrian. Mobile phones in Japanese life (pp. 123-142). ",
    location: "Cambridge, MA",
    publisher: "MIT Press"
  },
  haddon2004: {
    author: "Haddon, L. (2004).",
    ref: "Haddon, 2004",
    title: "Information and communication technologies in everyday life. ",
    location: "Oxford",
    publisher: "Berg"
  },
  buckingham2007: {
    author: "Buckingham, D. (2007).",
    ref: "Buckingham, 2007",
    title: "Digital Media Literacies: rethinking media education in the age of the Internet. Research in Comparative and International Education, 2(1), 43-55."
  },
  deursendijk2008: {
    author: "van Deursen, A. & van Dijk, J. (2011).",
    ref: "van Deursen & van Dijk, 2008",
    title: "Internet skills and the digital divide. New Media and Society, 13(6), 893-911."
  },
  kuiperdehaan2012: {
    author: "Sonck, N., Kuiper, E., & de Haan, J. (2012).",
    ref: "Kuiper & de Haan, 2012",
    title: "Digital skills in the context of media literacy. In S. Livingstone, L. Haddon, & A. Görzig (eds) Children, risk and safety on the internet (pp. 87-98). ",
    location: "Bristol",
    publisher: "Policy Press"
  },
  sonckdehaan2013: {
    author: "Sonck, N. & de Haan, J. (2013).",
    ref: "Sonck & de Haan, 2013",
    title: "How the internet skills of European 11- to 16-year-olds mediate between online risk and harm. Journal of Children and Media, 7(1), 79-95."
  },
  livingstone2012: {
    author: "Livingstone, S., Hasebrink, U. & Görzig, A. (2012).",
    ref: "Livingstone et al., 2012",
    title: "Towards a general model of determinants of risks and safety. In S. Livingstone, L. Haddon, & A. Görzig (eds) Children, risk and safety on the internet (pp. 323-339). ",
    location: "Bristol",
    publisher: "Policy Press"
  },
  schrockboyd2008: {
    author: "Schrock, A. & Boyd, D. (2008).",
    ref: "Schrock & Boyd, 2008",
    title: "Online threats to youth: Solicitation, harassment, and problematic content: Literature review prepared for the Internet Safety Technical Task Force. Retrieved from cyber.law.harvard.edu"
  },
  levy2012: {
    author: "Levy, N., Cortesi, S., Crowley, E., Beaton, M., Casey, J., & Nolan, C. (2012).",
    ref: "Levy et al., 2012",
    title: "Bullying in a networked era: A literature review. Berkman Center Research Publication, 17. Retrieved from Cyber.law.harvard.edu"
  },
  boyd2008: {
    author: "Boyd, d. (2008).",
    ref: "Boyd, 2008",
    title: "Why youth (heart) social network sites: the role of networked publics in teenage social life. In D. Buckingham (ed.) Youth, identity and digital media (pp. 119-142).",
    location: "Cambridge, MA",
    publisher: "MIT Press"
  },
  ybarra2012: {
    author: "Ybarra, M.L., boyd, d., Korchmaros, J.D., & Oppenheim, J. (2012).",
    ref: "Ybarra et al., 2012",
    title: "Defining and measuring cyberbullying within the larger context of bullying victimization. Journal of Adolescent Health, 51(1), 53-58."
  },
  kernaghanelwood2013: {
    author: "Kernaghan, D., & Elwood, J. (2013).",
    ref: "Kernaghan & Elwood, 2013",
    title: "All the (cyber) world’s a stage: Framing cyberbullying as a performance. Cyberpsychology: Journal of Psychosocial Research on Cyberspace, 7(1). Retrieved from: Cyberpsychology.eu"
  },
  lampertdonoso2012: {
    author: "Lampert, C. & Donoso, V. (2012).",
    ref: "Lampert & Donoso, 2012",
    title: "Bullying. In S. Livingstone, L. Haddon & A. Görzig (eds) Children, risk and safety on the internet (pp, 141-150). ",
    location: "Bristol",
    publisher: "Policy Press"
  },
  lenhart2009: {
    author: "Lenhart, A. (2009).",
    ref: "Lenhart, 2009",
    title: "Teens and sexting: How and why minor teens are sending sexually suggestive nude or nearly nude images via text messaging. Washington, DC: Pew Research Center. Retrieved from: Pewresearch.org"
  },
  kofoedringrose2012: {
    author: "Kofoed, J. & Ringrose, J. (2012).",
    ref: "Kofoed & Ringrose, 2012",
    title: "Travelling and sticky affects: Exploring teens and sexualized cyberbullying through a Butlerian-Deleuzian-Guattarian lens. Discourse: Studies in the Cultural Politics of Education, 33(1), 5-20."
  },
  ringrose2012: {
    author: "Ringrose, J., Gill, R., Livingstone, S., & Harvey, L. (2012). ",
    ref: "Ringrose et al., 2012",
    title: " A qualitative study of children, young people and ‘sexting’: A report prepared for the NSPCC. ",
    location: "London",
    publisher: "National Society for the Prevention of Cruelty to Children"
  },
  barbovschi2012: {
    author: "Barbovschi, M., Marinescu, V., Velicu, A., & Laszlo, E. (2012). ",
    ref: "Barbovschi et al., 2012",
    title: "Meeting new contacts online. In S. Livingstone, L. Haddon, & A. Görzig (eds) Children, risk and safety on the internet (pp. 177-189).",
    location: "Bristol",
    publisher: "Policy Press"
  },
  barbovschi2014: {
    author: "Barbovschi, M. (2014).",
    ref: "Barbovschi, 2014",
    title: "Dealing with misuse of personal information online – Coping measures of children in the EU Kids Online III project. Communications: The European Journal of Communication Research, 39(3): 305–326."
  },
  rovolistsaliki2012: {
    author: "Rovolis, A. & Tsaliki, L. (2012). ",
    ref: "Rovolis & Tsaliki, 2012",
    title: "Pornography. In S. Livingstone, L. Haddon, & A. Görzig (eds) Children, risk and safety on the internet (pp. 165-176).",
    location: "Bristol",
    publisher: "Policy Press"
  },
  attwoodsmith2011: {
    author: "Attwood, F., & Smith, C. (2011).",
    ref: "Attwood & Smith, 2011",
    title: "Investigating young people's sexual cultures: an introduction. Sex Education, 11(3), 235-242."
  },
  buckinghambragg2004: {
    author: "Buckingham, D., & Bragg, S. (2004). ",
    ref: "Buckingham & Bragg, 2004",
    title: "Young people, sex and the media: The facts of life?",
    location: "Basingstoke",
    publisher: "Palgrave Macmillan"
  },
  vandoninckhaenensroe2013: {
    author: "Vandoninck, S., d’Haenens, L., & Roe, K. (2013). ",
    ref: "Smahel & Wright, 2014",
    title: "Online risks: Coping strategies of less resilient children and teenagers across Europe. Journal of Children and Media, 7(1), 60-78."
  },
  kardefeltwinther2014: {
    author: "Kardefelt-Winther, D. (2014). ",
    ref: "Kardefelt-Winther, 2014",
    title: "A conceptual and methodological critique of internet addiction research: Towards a model of compensatory internet use. Computers in Human Behavior, 31, 351-354."
  },
  katzaakhus2002: {
    author: "Katz, J.E. & Aakhus, M. (2002).",
    ref: "Katz & Aakhus, 2002",
    title: "Perpetual contact: Mobile communication, private talk, public performance.",
    location: "Cambridge",
    publisher: "Cambridge University Press"
  },
  hallbaym2012: {
    author: "Hall, J.A. & Baym, N.K. (2012).",
    ref: "Hall & Baym, 2012",
    title: "Calling and texting (too much): Mobile maintenance expectations (over) dependence, entrapment, and friendship satisfaction. New Media & Society, 14(2), 316-331."
  },
  vincentfortunati2009: {
    author: "Vincent, J. & Fortunati, L. (Eds.). (2009).",
    ref: "Vincent & Fortunati, 2009",
    title: "Electronic emotion: The mediation of emotion via information and communication technologies. ",
    location: "Oxford",
    publisher: "Peter Lang"
  },
  licoppe2004: {
    author: "Licoppe, C. (2004)",
    ref: "Licoppe, 2004",
    title: "'Connected' presence: the emergence of a new repertoire for managing social relationships in a changing communication technoscape. Environment and Planning D: Society and Space, 22(1), 135 – 156."
  },
  mascheroni2013: {
    author: "Mascheroni, G., Murru, M.F., Aristodemou, E., & Laouris, Y. (2013).",
    ref: "Mascheroni et al., 2013",
    title: "Parents. Mediation, self-regulation and co-regulation. In B. O’Neill, E. Staksrud, & S. McLaughlin (eds) Towards a better internet for children? Policy pillars, players and paradoxes (pp. 211-225). ",
    location: "Göteborg",
    publisher: "Nordicom"
  },
  neilllaouris2013: {
    author: "O’Neill, B. & Laouris, Y. (2013).",
    ref: "O’Neill & Laouris, 2013",
    title: "Teaching internet safety, promoting digital literacy. The dual role of educations and schools. In B. O’Neill, E. Staksrud, & S. McLaughlin (eds) Towards a better internet for children? Policy pillars, players and paradoxes (pp. 193-209).  ",
    location: "Göteborg",
    publisher: "Nordicom"
  },
  barbovschimarinescu2013: {
    author: "Barbovschi, M. & Marinescu, V. (2013).",
    ref: "Barbovschi & Marinescu, 2013",
    title: "Youth. Revisiting policy dilemmas in internet safety in the context of children’s rights. In B. O’Neill, E. Staksrud, & S. McLaughlin (eds) Towards a better internet for children? Policy pillars, players and paradoxes (pp. 227-246).  ",
    location: "Göteborg",
    publisher: "Nordicom"
  },
  clark2012: {
    author: "Clark, L. S. (2012).",
    ref: "Clark, 2012",
    title: "The Parent App: Understanding Families in the Digital Age. ",
    location: "Oxford",
    publisher: "Oxford University Press"
  },
  livingstonehelsper2008: {
    author: "Livingstone, S. & Helsper, E. (2008).",
    ref: "Livingstone & Helsper, 2008",
    title: "Parental mediation and children’s Internet use. Journal of Broadcasting & Electronic Media, 52(4), 581-599."
  },
  mendoza2009: {
    author: "Mendoza K. (2009).",
    ref: " Mendoza, 2009",
    title: "Surveying Parental Mediation: Connections, Challenges, and Questions for Media Literacy. The Journal of Media Literacy, 1(2009): 28-41."
  },
  kalmus2012: {
    author: "Kalmus, V., von Felitzen, C., & Siibak, A. (2012). ",
    ref: "Kalmus, von Felitzen, & Siibak, 2012",
    title: "Effectiveness of teachers’ and peers’ mediation in supporting opportunities and reducing risks online. In S. Livingstone, L. Haddon, & A. Görzig (eds) Children, risk and safety on the internet (pp. 245-256).",
    location: "Bristol",
    publisher: "Policy Press"
  }
};
