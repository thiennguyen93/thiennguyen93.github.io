---
title: Flags of the World Quiz
titleClassnames: ["is-hidden"]
date: 2021-08-14 10:16:35
toc: true
lang: en
layout: page
article:
  licenses: false
donates: false
comment: false
background: false
widgets: false
thumbnail: https://thiennguyenpro.files.wordpress.com/2021/08/logo-hcmus.png
useStyles: ["/assets/pages/games/world-flags-quiz/css/style.css","https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css"]
---

<!-- <button onclick="confetti()" id="confetti-btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Confetti
</button> -->

<div id="game-screen" class="has-ribbon game_step_home">
  <button onclick="backToHome(this)" id="home-button" class="ribbon button is-primary cssanimation blurInTop">
    <i class="fa-solid fa-house"></i>
  </button>
  <h1 class="has-text-centered">
    <p class="cssanimation leFlyInRight sequence">World Flags Mini Game</p>
  </h2>
  <div id="welcome-screen" class="">
    <h1 class="has-text-centered">
      <div class="globe-container">
        <div class="cssanimation blurInLeft globe">
            <div class="globe-sphere"></div>
            <div class="globe-outer-shadow"></div>
            <div class="globe-worldmap">
                <div class="globe-worldmap-back"></div>
                <div class="globe-worldmap-front"></div>
            </div>
            <div class="globe-inner-shadow"></div>
        </div>
      </div>
    </h1>
    <h1 class="has-text-centered cssanimation fadeInBottom">
      <Button class="button is-success px-5" onclick="onClickStartButton(this)">Start</Button>
    </h1>
  </div>

  <div id="choose-game-modes-screen" class="cssanimation display-none">
    <div class="card cssanimation blurInLeft">
      <div class="card-content">
        <div class="content">
          Choose one game mode
        </div>
      </div>
    </div>
    <div class="columns is-desktop mt-5">
      <div class="column">
        <div class="card game-mode-option cssanimation blurInTop display-none">
          <div class="card-content width-38-percent margin-0-auto">
            <figure class="image is-128x128">
              <img src="/assets/pages/games/world-flags-quiz/img/countries_128.png">
            </figure>
          </div>
          <footer class="card-footer">
            <button class="is-primary button is-large is-fullwidth" onclick="chooseGameMode('flag', this)">Find the flag</button>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card game-mode-option cssanimation blurInTop display-none">
          <div class="card-content width-38-percent margin-0-auto">
            <figure class="image is-128x128">
              <img class="not-gallery-item" src="/assets/pages/games/world-flags-quiz/img/flag_128.png">
            </figure>
          </div>
          <footer class="card-footer">
            <button class="is-primary button is-large is-fullwidth" onclick="chooseGameMode('country', this)">Find the country</button>
          </footer>
        </div>
      </div>
    </div>
  </div>

  <div id="game-play">
    <div id="game-mode-country" class="cssanimation blurInBottom display-none">
      <p>country</p>
    </div>
    <div id="game-mode-flag" class="cssanimation display-none">
      <!-- START FLAG QUESTION -->
      <div id="flag-question" class="cssanimation blurInBottom mt-5">
        <h3 class="has-text-centered" class="mt-5">
          <span>Choose the correct flag</span>
        </h3>
        <h3 class="has-text-centered mt-2">
          <button onclick="congrats(this)" class="button is-primary is-size-4">Vietnam</button>
        </h3>
      </div>
      <!-- END FLAG QUESTION -->
      <!--  -->
      <!-- START FLAG MULTIPLE CHOICES  -->
      <div id="flag-multiple-choices" class="mt-5">
        <div class="columns">
          <!-- START OPTION 1 -->
          <div class="column is-half-desktop">
            <a href="#">
              <div class="card is-warning game-mode-flag-option cssanimation blurInTop">
                <div class="card-content width-38-percent margin-0-auto">
                  <figure class="image">
                    <img src="https://flagcdn.com/108x81/ua.webp" class="not-gallery-item img-reset-brightness">
                  </figure>
                </div>
              </div>
            </a>
          </div>
          <!-- END OPTION 1 -->
          <!-- START OPTION 2 -->
          <div class="column is-half-desktop">
            <a href="#">
              <div class="card is-warning game-mode-flag-option cssanimation blurInTop">
                <div class="card-content width-38-percent margin-0-auto">
                  <figure class="image">
                    <img src="https://flagcdn.com/108x81/vn.webp" class="not-gallery-item img-reset-brightness">
                  </figure>
                </div>
              </div>
            </a>
          </div>
          <!-- END OPTION 2 -->
        </div>
        <div class="columns">
          <!-- START OPTION 3 -->
          <div class="column is-half-desktop">
            <a href="#">
              <div class="card is-warning game-mode-flag-option cssanimation blurInTop">
                <div class="card-content width-38-percent margin-0-auto">
                  <figure class="image">
                    <img src="https://flagcdn.com/108x81/us.webp" class="not-gallery-item img-reset-brightness">
                  </figure>
                </div>
              </div>
            </a>
          </div>
          <!-- END OPTION 3 -->
          <!-- START OPTION 4 -->
          <div class="column is-half-desktop">
            <a href="#">
              <div class="card is-warning game-mode-flag-option cssanimation blurInTop">
                <div class="card-content width-38-percent margin-0-auto">
                  <figure class="image">
                    <img src="https://flagcdn.com/108x81/ru.webp" class="not-gallery-item img-reset-brightness">
                  </figure>
                </div>
              </div>
            </a>
          </div>
          <!-- END OPTION 4 -->
        </div>
      </div>
      <!-- END FLAG MULTIPLE CHOICES  -->
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/letteranimation.min.js"></script>

<script src="/assets/pages/games/world-flags-quiz/js/script.js"></script>
<script src="/assets/pages/games/world-flags-quiz/js/confetti-effect.js"></script>
<script src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"></script>
