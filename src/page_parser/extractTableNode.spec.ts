import { parse } from 'node-html-parser';
import { extractTableNode } from './extractTableNode';

describe('extract table root node', () => {
  it('extracts table root node', () => {
    const gamesContent = `
    <div>
    <div class="header-font mt-2 mb-1 s-16 font-weight-bold bg-primary text-white text-center rounded px-2 py-2">3 LIGA: Sezon Zasadniczy</div>
    <div class="header-font mt-2 mb-1 s-14 font-weight-bold bg-primary text-white rounded px-2 py-1">niedziela, 11.12.2022</div>
    <div class="header-font my-1 s-14 font-weight-bold rounded px-2 py-1" style="background: #eee !important;">Kolejka 1</div>
    </div>`;
    const wrapped = wrapInWholePage(gamesContent);
    const tableNode = extractTableNode(wrapped);

    const expected = parse(
      `<div class="mx-auto" style="max-width: 860px;">${gamesContent}</div>`,
    )
      .removeWhitespace()
      .toString();

    expect(tableNode.removeWhitespace().toString()).toEqual(expected);
  });
});

function wrapInWholePage(content: string): string {
  return `
<!doctype html>
<html lang="pl">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <meta name="theme-color" content="#9A0606">

  <link rel="stylesheet" href="/variables.css?d=1669666280" id="variables-css" disabled>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="/css/app.css?d=1669666280" id="app-css" disabled>

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" id="font-awesome-css"
      disabled>

  <link rel="stylesheet" href="/plugins/swiper/css/swiper.min.css" id="swiper-css" disabled>

  <!-- Font -->
  <link rel="preconnect" href="https://fonts.gstatic.com">

          <link media="screen" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap"
          rel="stylesheet">
  
          
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap"
          rel="stylesheet">
  
  
  <link media="screen" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"
      id="google-icons" disabled>

  <link rel="stylesheet" href="https://polskihokej.eu/css/style.css?d=1669666280" id="style-css" disabled>
  <link rel="stylesheet" href="/css/97/custom.css?d=1669666280" id="style-css-custom"
      disabled>
  <link rel="manifest" href="/manifest.json" />

  <style>
      @keyframes  stretch {
          0% {
              transform: scale(.8);
          }

          100% {
              transform: scale(1.15);
          }
      }
  </style>

      
      <!-- title-->
<title>Terminarz - 3 LIGA: Centrum Meczowe | Polski Hokej</title>

<!-- seo -->
<meta name="description" content="Oficjalny Serwis Polskiego Hokeja" />

<!-- og -->
<meta property="og:title" content="Terminarz - 3 LIGA: Centrum Meczowe | Polski Hokej" />
<meta property="og:site_name" content="Polski Hokej" />
<meta property="og:type" content="website" />
<meta property="og:description" content="Oficjalny Serwis Polskiego Hokeja" />
<meta property="og:url" content="https://polskihokej.eu/games/schedule/3-liga-mazowiecka/8" />
<meta property="og:image" content="" />
<meta property="og:locale" content="pl_PL" />
<meta property="og:image:type" content="jpg">

  <!-- favicon -->
  <link href="https://dfdu1vke3eg77.cloudfront.net/spaces/97/img/icon/128x128.png" rel="icon" type="image/png" />
  <link rel="apple-touch-icon" href="https://dfdu1vke3eg77.cloudfront.net/spaces/97/img/icon/128x128.png">

  <!-- Google Tag Manager -->
  <script>
      (function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
          });
          var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src =
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-M6B896Z');
  </script>
  <!-- End Google Tag Manager -->

  
  
          <!-- Cookie Consent -->
      <script type="text/javascript" src="//www.freeprivacypolicy.com/public/cookie-consent/3.1.0/cookie-consent.js"></script>
      <script type="text/javascript">
          document.addEventListener('DOMContentLoaded', function() {
              cookieconsent.run({
                  "notice_banner_type": "headline",
                  "consent_type": "express",
                  "palette": "light",
                  "language": "pl",
                  "website_name": ""
              });
          });
      </script>
      <noscript>Cookie Consent by <a href="https://www.FreePrivacyPolicy.com/free-cookie-consent/"
              rel="nofollow noopener">FreePrivacyPolicy.com</a></noscript>
      <!-- End Cookie Consent -->
  
  

  

  <script src="/js/app.js?d=1669666280" defer></script>
  
</head>

<body data-barba="wrapper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6B896Z" height="0" width="0"
          style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <div data-barba="container" data-barba-namespace="home">

      <div id="page-loader-div"
          style="position: fixed; top: 0; left: 0; background: #fff; width: 100vw; height: 100vh; z-index: 999999999999; display: flex;
          justify-content: center;
          /* align-self: center;    <---- REMOVE */
          align-items: center;   /* <---- NEW    */ ">
          <img src="https://dfdu1vke3eg77.cloudfront.net/spaces/97/img/logo/logo.png"
              style="max-height: 100px;
              animation-name: stretch;
              animation-duration: 1.0s;
              animation-timing-function: ease-out;
              animation-direction: alternate;
              animation-iteration-count: infinite;
              animation-play-state: running;" />
      </div>

              <div class="d-none d-sm-block">
  <div class="bg-danger w-100 text-left text-white py-2 px-4 s-14" style="max-height: 50px;">

  <div class="float-right">
              <a href="https://facebook.com/polskihokej.eu" class="d-inline-block text-white mx-1 s-16" target="_blank"><i class="fab fa-facebook-f"></i></a>
                          <a href="https://twitter.com/PZHL" class="d-inline-block text-white mx-1 s-16" target="_blank"><i class="fab fa-twitter"></i></a>
                          <a href="https://instagram.com/polskihokej" class="d-inline-block text-white mx-1 s-16" target="_blank"><i class="fab fa-instagram"></i></a>
                          <a href="https://www.youtube.com/c/PolskiHokej" class="d-inline-block text-white mx-1 s-16" target="_blank"><i class="fab fa-youtube"></i></a>
                          </div>

  Polski Hokej | Oficjalny serwis
  </div>
  <div class="text-center w-100 pt-3 mb-1 bg-white menu-x4-container">
      <a href="/">
          <img src="https://dfdu1vke3eg77.cloudfront.net/spaces/97/img/logo/logo.png?v=" style="height: 90px;">
      </a>

  <div class="w-100 mt-2">
      <div class="d-flex justify-content-center py-3">
                                          <div class="mx-3">
                  <a class="d-flex menu-x4" href="/posts/articles">
                      
                      <div class="align-self-center ml-0">AKTUALNOŚCI</div>
                  </a>
              </div>

                                          
              <div class="mx-3 dropdown">
                  <a href="#" class="d-flex menu-x4" id="dropdownMenu" data-toggle="dropdown">
                      
                      <div class="align-self-center ml-0">ROZGRYWKI</div>
                      <div class="align-self-center ml-1">
                          ⯆
                      </div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenu">
                                              <a href="/ligi" class="dropdown-item s-16">
                          LIGI / TURNIEJE MP
                      </a>
                                              <a href="/players" class="dropdown-item s-16">
                          ZAWODNICY
                      </a>
                                          </div>
              </div>

                                                          <div class="mx-3">
                  <a class="d-flex menu-x4" href="/live">
                      
                      <div class="align-self-center ml-0">WYNIKI NA ŻYWO</div>
                  </a>
              </div>

                                                          <div class="mx-3">
                  <a class="d-flex menu-x4" href="http://polskihokej.tv/">
                      
                      <div class="align-self-center ml-0">POLSKI HOKEJ TV</div>
                  </a>
              </div>

                                                          <div class="mx-3">
                  <a class="d-flex menu-x4" href="https://pzhl.eu" target=&quot;_blank&quot;>
                      
                      <div class="align-self-center ml-0">PZHL</div>
                  </a>
              </div>

                                          
              <div class="mx-3 dropdown">
                  <a href="#" class="d-flex menu-x4" id="dropdownMenu" data-toggle="dropdown">
                      
                      <div class="align-self-center ml-0">REPREZENTACJA</div>
                      <div class="align-self-center ml-1">
                          ⯆
                      </div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenu">
                                              <a href="https://polskihokej.eu/i/seniorzy/24" class="dropdown-item s-16">
                          SENIORZY
                      </a>
                                              <a href="https://polskihokej.eu/i/juniorzy-u20/25" class="dropdown-item s-16">
                          JUNIORZY U20
                      </a>
                                              <a href="https://polskihokej.eu/i/juniorzy-u18/26" class="dropdown-item s-16">
                          JUNIORZY U18
                      </a>
                                              <a href="https://polskihokej.eu/i/juniorzy-u16/27" class="dropdown-item s-16">
                          JUNIORZY U16
                      </a>
                                              <a href="https://polskihokej.eu/i/seniorki/28" class="dropdown-item s-16">
                          SENIORKI
                      </a>
                                              <a href="https://polskihokej.eu/i/juniorki-u18/29" class="dropdown-item s-16">
                          JUNIORKI U18
                      </a>
                                          </div>
              </div>

                                                          <div class="mx-3">
                  <a class="d-flex menu-x4" href="https://polskihokej.eu/i/dla-mediow/18">
                      
                      <div class="align-self-center ml-0">DLA MEDIÓW</div>
                  </a>
              </div>

                                                          <div class="mx-3">
                  <a class="d-flex menu-x4" href="https://sklep.polskihokej.eu" target=&quot;_blank&quot;>
                      
                      <div class="align-self-center ml-0">SKLEP</div>
                  </a>
              </div>

                                  </div>
  </div>

  </div>
</div>

<div class="d-block d-sm-none" style="height: 56px;">

</div>






<div class="navbar navbar-expand-lg fixed-top bg-white shadow d-block d-lg-none">
  <div class="container" style="max-width: 100%">

      <a onclick="toggleNav()" class="open-nav text-primary" style="font-size: 30px; z-index: 9999">
          <i class="fas fa-bars"></i>
      </a>

      <div class="w-100 text-center" style="position: absolute; left:0; top:0; margin-top: 5px">
          <a href="https://polskihokej.eu">
          <img src="https://dfdu1vke3eg77.cloudfront.net/spaces/97/img/logo/logo.png" style="height: 50px;">
          </a>
      </div>

      <div class="text-right">

          
      </div>

      <a id="closeNav" onclick="toggleNav()" class="text-white" style="font-size: 30px; display:none; z-index: 9999">
          x
      </a>

  </div>
</div>
<div id="sideNav" class="sidenav bg-primary" style="z-index: 11;">
  
  <div class="px-1 mt-4">

                  <a class="d-flex menu-item-card-wrapper bg-danger" style="height: 50px;" href="https://pzhl.eu">
              <div class="menu-item-card-icon align-self-center">
                  
              </div>
              <div class="menu-item-card align-self-center">
                  Strona PZHL
              </div>
          </a>
      
      <div class="row mx-0">
          
          <div class="col-6 px-1">
                              <a class="d-flex menu-item-card-wrapper" href="/posts/articles">
                  <div class="menu-item-card-icon align-self-center">
                      <i class="far fa-newspaper"></i> &nbsp;
                  </div>
                  <div class="menu-item-card align-self-center">
                      AKTUALNOŚCI
                  </div>
              </a>
                          </div>
          
          <div class="col-6 px-1">
                              <div class="d-flex menu-item-card-wrapper">
                  

                  <div class="menu-item-card-icon align-self-center">
                      <i class="far fa-calendar"></i> &nbsp;
                  </div>
                  <div class="dropdown menu-item-card align-self-center">
                  <a class="text-white" data-toggle="dropdown" href="#" id="themes">
                      ROZGRYWKI <span class="caret"></span>
                  </a>
                  <div class="dropdown-menu w-100 rounded" style="background: var(--primary); border: none !important;" aria-labelledby="themes">
                                              <div class="menu-item-card-wrapper mx-1">
                          <a href="/ligi" class="dropdown-item menu-item-card align-self-center" style="white-space: normal;">
                              LIGI / TURNIEJE MP
                          </a>
                      </div>
                                              <div class="menu-item-card-wrapper mx-1">
                          <a href="/players" class="dropdown-item menu-item-card align-self-center" style="white-space: normal;">
                              ZAWODNICY
                          </a>
                      </div>
                                          </div>
                  </div>
              </div>
                              </div>
          
          <div class="col-6 px-1">
                              <a class="d-flex menu-item-card-wrapper" href="/live">
                  <div class="menu-item-card-icon align-self-center">
                      <i class="fas fa-record-vinyl"></i> &nbsp;
                  </div>
                  <div class="menu-item-card align-self-center">
                      WYNIKI NA ŻYWO
                  </div>
              </a>
                          </div>
          
          <div class="col-6 px-1">
                              <a class="d-flex menu-item-card-wrapper" href="http://polskihokej.tv/">
                  <div class="menu-item-card-icon align-self-center">
                      <i class="fas fa-video"></i> &nbsp;
                  </div>
                  <div class="menu-item-card align-self-center">
                      POLSKI HOKEJ TV
                  </div>
              </a>
                          </div>
          
          <div class="col-6 px-1">
                              <a class="d-flex menu-item-card-wrapper" href="https://pzhl.eu" target=&quot;_blank&quot;>
                  <div class="menu-item-card-icon align-self-center">
                      
                  </div>
                  <div class="menu-item-card align-self-center">
                      PZHL
                  </div>
              </a>
                          </div>
          
          <div class="col-6 px-1">
                              <div class="d-flex menu-item-card-wrapper">
                  

                  <div class="menu-item-card-icon align-self-center">
                      <i class="far fa-calendar"></i> &nbsp;
                  </div>
                  <div class="dropdown menu-item-card align-self-center">
                  <a class="text-white" data-toggle="dropdown" href="#" id="themes">
                      REPREZENTACJA <span class="caret"></span>
                  </a>
                  <div class="dropdown-menu w-100 rounded" style="background: var(--primary); border: none !important;" aria-labelledby="themes">
                                              <div class="menu-item-card-wrapper mx-1">
                          <a href="https://polskihokej.eu/i/seniorzy/24" class="dropdown-item menu-item-card align-self-center" style="white-space: normal;">
                              SENIORZY
                          </a>
                      </div>
                                              <div class="menu-item-card-wrapper mx-1">
                          <a href="https://polskihokej.eu/i/juniorzy-u20/25" class="dropdown-item menu-item-card align-self-center" style="white-space: normal;">
                              JUNIORZY U20
                          </a>
                      </div>
                                              <div class="menu-item-card-wrapper mx-1">
                          <a href="https://polskihokej.eu/i/juniorzy-u18/26" class="dropdown-item menu-item-card align-self-center" style="white-space: normal;">
                              JUNIORZY U18
                          </a>
                      </div>
                                              <div class="menu-item-card-wrapper mx-1">
                          <a href="https://polskihokej.eu/i/juniorzy-u16/27" class="dropdown-item menu-item-card align-self-center" style="white-space: normal;">
                              JUNIORZY U16
                          </a>
                      </div>
                                              <div class="menu-item-card-wrapper mx-1">
                          <a href="https://polskihokej.eu/i/seniorki/28" class="dropdown-item menu-item-card align-self-center" style="white-space: normal;">
                              SENIORKI
                          </a>
                      </div>
                                              <div class="menu-item-card-wrapper mx-1">
                          <a href="https://polskihokej.eu/i/juniorki-u18/29" class="dropdown-item menu-item-card align-self-center" style="white-space: normal;">
                              JUNIORKI U18
                          </a>
                      </div>
                                          </div>
                  </div>
              </div>
                              </div>
          
          <div class="col-6 px-1">
                              <a class="d-flex menu-item-card-wrapper" href="https://polskihokej.eu/i/dla-mediow/18">
                  <div class="menu-item-card-icon align-self-center">
                      <i class="far fa-newspaper"></i> &nbsp;
                  </div>
                  <div class="menu-item-card align-self-center">
                      DLA MEDIÓW
                  </div>
              </a>
                          </div>
          
          <div class="col-6 px-1">
                              <a class="d-flex menu-item-card-wrapper" href="https://sklep.polskihokej.eu" target=&quot;_blank&quot;>
                  <div class="menu-item-card-icon align-self-center">
                      
                  </div>
                  <div class="menu-item-card align-self-center">
                      SKLEP
                  </div>
              </a>
                          </div>
                  </div>

      <div class="mx-auto mt-4 px-2 text-center align-self-center" id="top_right_content_mobile">
          
      </div>

  </div>
  
</div>



<div id="bottom-menu-mobile" data-setting="" class="d-block d-sm-none card" style="
position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999999;
  -webkit-transition: -webkit-bottom 0.15s ease-in;
  -webkit-transition: bottom 0.15s ease-in;
  transition: bottom 0.15s ease-in;
  background-color: #FFFFFF;
  box-shadow: 0 0px 12px 0 rgba(99,99,99,0.4);
">

<div style="
display: grid;
  grid-template-columns: repeat(5,1fr);
  width: 100%;
  height: 54px;
  background-color: #FFFFFF;
">


<a aria-current="page" class="bottom-menu-button" data-cy="bb-home" href="/">
  <span class="material-icons-outlined">home</span>
  <p class="bottom-menu-text m-0 pt-1">Home</p>
</a>

<a aria-current="page" class="bottom-menu-button explore" data-cy="bb-home" href="#" onclick="showExplore()">
  <span class="material-icons-outlined">search</span>
  <p class="bottom-menu-text m-0 pt-1">Odkryj</p>
</a>


  
      <a aria-current="page" class="bottom-menu-button" data-cy="bb-home" href="/live">
          <span class="material-icons-outlined">wifi_tethering</span>
          <span class="bottom-menu-text m-0 pt-1">Na żywo</span>
      </a>

  
      <a aria-current="page" class="bottom-menu-button" data-cy="bb-home" href="/ligi">
          <span class="material-icons-outlined">emoji_events</span>
          <span class="bottom-menu-text m-0 pt-1">Rozgrywki</span>
      </a>

  


<a aria-current="page" class="bottom-menu-button" data-cy="bb-home" href="https://polskihokej.eu/social-media">

  <span class="material-icons-outlined">tag</span>
  <p class="bottom-menu-text m-0 pt-1">Social Media</p>

</a>


</div>

</div>


      
      

      
<div>

  <section>

  <div class="bg-danger secondary-accent"></div>

  <div class="bg-primary" style="margin-top: -30px">
      <div class="container mb-2 pb-2" style="margin-top: 30px;">
          <div class="d-flex">
              <h2 class="page-header-text pt-0" style="color: #fff !important">
                  3 LIGA
              </h2>
              <div class="ml-auto align-self-center">
                  <form id="season_form" method="GET">
                  <input type="hidden" name="p_id" id="p_id" value="">
                  <input type="hidden" name="g_id" id="g_id" value="">
                  <input type="hidden" name="club_id" id="club_id" value="">
                  <input type="hidden" name="pos" id="pos" value="">
                  <select onchange="changeSeason()" class="btn btn-sm btn-light" name="season">
                                                  <option value="3" SELECTED>
                              2022/2023
                          </option>
                                                  <option value="1">
                              2021/2022
                          </option>
                                          </select>
                  </form>
                                  </div>
          </div>
          
      </div>
  </div>

  
  <div class="container">
      <div class="row">
          <div class="col-sm-3 bg-white">

              
              <div class="d-none d-sm-block">

                                          <a href="https://polskihokej.eu/games/schedule/3-liga/8" class="d-flex flex-row --open-loader sidebar-button active">
      <div class="icon float-left ml-4">
      <span class="material-icons-outlined">
                          calendar_today
                          </span>
  </div>
      <span class="menu_item_name">
      Terminarz
  </span>
</a>
                                          <a href="https://polskihokej.eu/games/results/3-liga/8" class="d-flex flex-row --open-loader sidebar-button">
      <div class="icon float-left ml-4">
      <span class="material-icons-outlined">
                          event_available
                          </span>
  </div>
      <span class="menu_item_name">
      Wyniki
  </span>
</a>
                                          <a href="https://polskihokej.eu/standings/8/3-liga" class="d-flex flex-row --open-loader sidebar-button">
      <div class="icon float-left ml-4">
      <span class="material-icons-outlined">
                          emoji_events
                          </span>
  </div>
      <span class="menu_item_name">
      Tabela
  </span>
</a>
                                          <a href="https://polskihokej.eu/stats/8/3-liga" class="d-flex flex-row --open-loader sidebar-button">
      <div class="icon float-left ml-4">
      <span class="material-icons-outlined">
                          star_border
                          </span>
  </div>
      <span class="menu_item_name">
      Statystyki
  </span>
</a>
                                          <a href="https://polskihokej.eu/goalkeeper-stats/8/3-liga" class="d-flex flex-row --open-loader sidebar-button">
      <div class="icon float-left ml-4">
      <span class="material-icons-outlined">
                          flag
                          </span>
  </div>
      <span class="menu_item_name">
      Bramkarze
  </span>
</a>
                                          
              </div>

              <div class="d-block d-sm-none">
                  <div class="w-100 bg-white pb-1">
                              
                      <a data-toggle="modal" data-target="#adminMenuModal" nclick="showMenuModal()" class="d-block w-100 px-2 bg-white w-100 text-left py-2 mt-1 s-16" data-toggle="collapse" href="#collapseWikiMenu" role="button" aria-expanded="false" aria-controls="collapseWikiMenu">
                          Menu
                          <div class="float-right font-weight-light">
                              <i class="fas fa-bars s-20"></i>
                          </div>
                      </a>
      
                      <div class="swiper-container swiper-admin-menu mt-1">
                          <div class="swiper-wrapper">

                                                                  <div class="swiper-slide" style="width: 100px; background: none;" data-aos="zoom-out">

                                          <a href="https://polskihokej.eu/games/schedule/3-liga/8" style="height: 100px;">
                                              <div class="align-self-center w-100 text-center">
              
                                                  <div class="admin-mobile-menu-item mx-auto bg-danger rounded-circle d-flex align-items-center justify-content-center" 
                                                      style="width: 64px; height: 64px;">
                                                      <span class="material-icons-outlined">
                          calendar_today
                          </span>
                                                  </div>
                                                  <p class="mb-0 mt-2 p-0 s-13 font-weight-bold text-danger">
                                                      Terminarz
                                                  </p>
                                              </div>
                                          </a>
                                          
                                      </div>
                                                                      <div class="swiper-slide" style="width: 100px; background: none;" data-aos="zoom-out">

                                          <a href="https://polskihokej.eu/games/results/3-liga/8" style="height: 100px;">
                                              <div class="align-self-center w-100 text-center">
              
                                                  <div class="admin-mobile-menu-item mx-auto bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                                      style="width: 64px; height: 64px;">
                                                      <span class="material-icons-outlined">
                          event_available
                          </span>
                                                  </div>
                                                  <p class="mb-0 mt-2 p-0 s-13">
                                                      Wyniki
                                                  </p>
                                              </div>
                                          </a>
                                          
                                      </div>
                                                                      <div class="swiper-slide" style="width: 100px; background: none;" data-aos="zoom-out">

                                          <a href="https://polskihokej.eu/standings/8/3-liga" style="height: 100px;">
                                              <div class="align-self-center w-100 text-center">
              
                                                  <div class="admin-mobile-menu-item mx-auto bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                                      style="width: 64px; height: 64px;">
                                                      <span class="material-icons-outlined">
                          emoji_events
                          </span>
                                                  </div>
                                                  <p class="mb-0 mt-2 p-0 s-13">
                                                      Tabela
                                                  </p>
                                              </div>
                                          </a>
                                          
                                      </div>
                                                                      <div class="swiper-slide" style="width: 100px; background: none;" data-aos="zoom-out">

                                          <a href="https://polskihokej.eu/stats/8/3-liga" style="height: 100px;">
                                              <div class="align-self-center w-100 text-center">
              
                                                  <div class="admin-mobile-menu-item mx-auto bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                                      style="width: 64px; height: 64px;">
                                                      <span class="material-icons-outlined">
                          star_border
                          </span>
                                                  </div>
                                                  <p class="mb-0 mt-2 p-0 s-13">
                                                      Statystyki
                                                  </p>
                                              </div>
                                          </a>
                                          
                                      </div>
                                                                      <div class="swiper-slide" style="width: 100px; background: none;" data-aos="zoom-out">

                                          <a href="https://polskihokej.eu/goalkeeper-stats/8/3-liga" style="height: 100px;">
                                              <div class="align-self-center w-100 text-center">
              
                                                  <div class="admin-mobile-menu-item mx-auto bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                                      style="width: 64px; height: 64px;">
                                                      <span class="material-icons-outlined">
                          flag
                          </span>
                                                  </div>
                                                  <p class="mb-0 mt-2 p-0 s-13">
                                                      Bramkarze
                                                  </p>
                                              </div>
                                          </a>
                                          
                                      </div>
                                          
                          </div>
                          <!-- Add Scrollbar -->
                          <div class="swiper-scrollbar mt-1"></div>
                      </div>
      
                              
                  </div>
              </div>

          </div>
          <div class="col-sm-9 pb-4 mb-4">

              
              <div class="mt-1 mb-0 w-100 scrollable-horizontally pb-2">
                                      <button onclick="changePhase(63)" 
                      class="btn btn-sm btn-light border mt-0">
                      Sezon Zasadniczy
                  </button>
                                  </div>

                              
              <div class="mt-1 mb-0 w-100 scrollable-horizontally pb-2">

              
              </div>

              
               

              

              
<h2 class="section-header mt-0 pt-1">
  Terminarz<span class="d-done d-sm-inline-block">&nbsp;- 3 LIGA</span>
</h2>

<div class="mx-auto" style="max-width: 860px;">
${content}
</div>        
                  
</div>

  

          </div>
      </div>
  </div>

  <div class="admin-menu-modal modal" id="adminMenuModal" tabindex="-1" role="dialog" aria-labelledby="adminMenuModal" aria-hidden="true">
      <div class="search-modal modal-dialog">
          <div class="search-modal modal-content px-sm-4 pt-0">
              <button type="button" class="close w-100 my-2 pl-2 d-block text-left" data-dismiss="modal" aria-hidden="true">
                   <i class="fas fa-chevron-left"></i> 
              </button>

              <ul class="list-group">
          
                                          <li class="list-group-item" style="background: none;" data-aos="zoom-out">
                          <a href="https://polskihokej.eu/games/schedule/3-liga/8" style="height: 100px;">
                              <div class="align-self-center w-100 text-center">
                                  <div class="float-left admin-mobile-menu-item-mini mx-auto bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                      style="width: 34px; height: 34px; margin-right: 14px !important;">
                                      <span class="material-icons-outlined">
                          calendar_today
                          </span>
                                  </div>
                                  <p class="mb-0 p-0 pt-1 text-left s-18 header-font">
                                      Terminarz
                                  </p>
                              </div>
                          </a>
                      </li>
                                          <li class="list-group-item" style="background: none;" data-aos="zoom-out">
                          <a href="https://polskihokej.eu/games/results/3-liga/8" style="height: 100px;">
                              <div class="align-self-center w-100 text-center">
                                  <div class="float-left admin-mobile-menu-item-mini mx-auto bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                      style="width: 34px; height: 34px; margin-right: 14px !important;">
                                      <span class="material-icons-outlined">
                          event_available
                          </span>
                                  </div>
                                  <p class="mb-0 p-0 pt-1 text-left s-18 header-font">
                                      Wyniki
                                  </p>
                              </div>
                          </a>
                      </li>
                                          <li class="list-group-item" style="background: none;" data-aos="zoom-out">
                          <a href="https://polskihokej.eu/standings/8/3-liga" style="height: 100px;">
                              <div class="align-self-center w-100 text-center">
                                  <div class="float-left admin-mobile-menu-item-mini mx-auto bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                      style="width: 34px; height: 34px; margin-right: 14px !important;">
                                      <span class="material-icons-outlined">
                          emoji_events
                          </span>
                                  </div>
                                  <p class="mb-0 p-0 pt-1 text-left s-18 header-font">
                                      Tabela
                                  </p>
                              </div>
                          </a>
                      </li>
                                          <li class="list-group-item" style="background: none;" data-aos="zoom-out">
                          <a href="https://polskihokej.eu/stats/8/3-liga" style="height: 100px;">
                              <div class="align-self-center w-100 text-center">
                                  <div class="float-left admin-mobile-menu-item-mini mx-auto bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                      style="width: 34px; height: 34px; margin-right: 14px !important;">
                                      <span class="material-icons-outlined">
                          star_border
                          </span>
                                  </div>
                                  <p class="mb-0 p-0 pt-1 text-left s-18 header-font">
                                      Statystyki
                                  </p>
                              </div>
                          </a>
                      </li>
                                          <li class="list-group-item" style="background: none;" data-aos="zoom-out">
                          <a href="https://polskihokej.eu/goalkeeper-stats/8/3-liga" style="height: 100px;">
                              <div class="align-self-center w-100 text-center">
                                  <div class="float-left admin-mobile-menu-item-mini mx-auto bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                      style="width: 34px; height: 34px; margin-right: 14px !important;">
                                      <span class="material-icons-outlined">
                          flag
                          </span>
                                  </div>
                                  <p class="mb-0 p-0 pt-1 text-left s-18 header-font">
                                      Bramkarze
                                  </p>
                              </div>
                          </a>
                      </li>
                  
                  

              </ul>

          </div>
      </div>
  </div>

</section>
</div>

  </div>
  
</body>

</html>
`;
}
