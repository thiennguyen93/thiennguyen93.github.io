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
useStyles: ["/assets/pages/games/world-flags-quiz/css/style.css","https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"]
---

<div id="game-screen" class="has-ribbon game_step_home">
  <div id="home-button" class="ribbon ribbon-custom-home-button">
    <button id="score-panel" onclick="backToHome(this)" class="button is-primary cssanimation blurInTop">
      <i class="fa-solid fa-award"></i>
      <span class="mx-3">Score</span>
      <div class="has-text-weight-semibold is-size-4">
        <span id="score">100</span>
        <span id="score-change" class="is-invisible">+100</span>
      </div>
    </button>
    <button onclick="backToHome(this)" class="button is-primary cssanimation blurInTop">
      <i class="fa-solid fa-house"></i>
    </button>
  </div>
  <h1 class="has-text-centered mb-5">
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
    <div class="columns is-flex is-desktop mt-5">
      <div class="column is-half-mobile">
        <div class="card game-mode-option cssanimation blurInTop display-none">
          <div class="card-content center-image margin-0-auto">
            <figure class="image is-64x64">
              <img src="/assets/pages/games/world-flags-quiz/img/countries_128.png">
            </figure>
          </div>
          <footer class="card-footer">
            <button class="is-size-5 is-primary button is-large is-fullwidth" onclick="//chooseGameMode('country', this)">Find the country <span class="ml-2">(coming soon)</span></button>
          </footer>
        </div>
      </div>
      <div class="column is-half-mobile">
        <div class="card game-mode-option cssanimation blurInTop display-none">
          <div class="card-content center-image margin-0-auto">
            <figure class="image is-64x64">
              <img class="not-gallery-item" src="/assets/pages/games/world-flags-quiz/img/flag_128.png">
            </figure>
          </div>
          <footer class="card-footer">
            <button class="is-size-5 is-primary button is-large is-fullwidth" onclick="chooseGameMode('flag', this)">Find the flag</button>
          </footer>
        </div>
      </div>
    </div>
  </div>

  <div id="game-play">
    <div id="game-mode-country" class="cssanimation blurInBottom display-none has-text-centered">
      <img src="/assets/pages/games/world-flags-quiz/img/219347-P0VB16-493.jpg" width="40%">
      <h2 class="has-text-centered mt-5 has-text-danger">This game mode is under construction</h2>
    </div>
    <div id="game-mode-flag" class="cssanimation display-none">
      <!-- START FLAG QUESTION -->
      <div id="flag-question" class="cssanimation blurInBottom mt-5">
        <h3 class="has-text-centered" class="mt-5">
          <span id="flag-question-text">Choose the correct flag</span>
        </h3>
        <h3 class="has-text-centered mt-2">
          <span id="flag-question-country-name" onclick="congrats(this)" class="has-text-success is-size-4 has-text-weight-semibold">Vietnam</span>
        </h3>
        <!-- START CONTROLLER -->
        <div id="flag-mode-controller my-3">
          <div class="columns is-flex is-flex-wrap-wrap is-justify-content-center">
            <div class="column is-half-mobile has-text-centered">
              <button class="button is-primary" onclick="flagModeGotoNextQuestion()">
                <i class="fa-solid fa-forward"></i>
                <span class="mx-2">Next question</span>
              </button>
            </div>
          </div>
        </div>
        <!-- END CONTROLLER -->
      </div>
      <!-- END FLAG QUESTION -->
      <!--  -->
      <!-- START FLAG MULTIPLE CHOICES  -->
      <div id="flag-multiple-choices" class="mt-5">
        <div class="columns is-flex is-flex-wrap-wrap">
          <!-- START OPTION 1 -->
          <div class="column is-half-mobile">
            <div onmouseenter="playSound(sounds.mouseHover)" class="card is-warning game-mode-flag-option cssanimation blurInTop" onclick="onPlayerSelectAnswerInFlagMode(this)">
              <div class="card-content center-image margin-0-auto flag-mode-option-item-wrapper">
                <figure class="image margin-0-auto">
                  <img src="https://flagcdn.com/128x96/ua.webp" class="flag-mode-option-items not-gallery-item img-reset-brightness">
                </figure>
              </div>
            </div>
          </div>
          <!-- END OPTION 1 -->
          <!-- START OPTION 2 -->
          <div class="column is-half-mobile">
            <div onmouseenter="playSound(sounds.mouseHover)" class="card is-warning game-mode-flag-option cssanimation blurInTop" onclick="onPlayerSelectAnswerInFlagMode(this)">
              <div class="card-content center-image margin-0-auto flag-mode-option-item-wrapper">
                <figure class="image margin-0-auto">
                  <img src="https://flagcdn.com/128x96/vn.webp" class="flag-mode-option-items not-gallery-item img-reset-brightness">
                </figure>
              </div>
            </div>
          </div>
          <!-- END OPTION 2 -->
          <!-- START OPTION 3 -->
          <div class="column is-half-mobile">
            <div onmouseenter="playSound(sounds.mouseHover)" class="card is-warning game-mode-flag-option cssanimation blurInTop" onclick="onPlayerSelectAnswerInFlagMode(this)">
              <div class="card-content center-image margin-0-auto flag-mode-option-item-wrapper">
                <figure class="image margin-0-auto">
                  <img src="https://flagcdn.com/128x96/us.webp" class="flag-mode-option-items not-gallery-item img-reset-brightness">
                </figure>
              </div>
            </div>
          </div>
          <!-- END OPTION 3 -->
          <!-- START OPTION 4 -->
          <div class="column is-half-mobile">
            <div onmouseenter="playSound(sounds.mouseHover)" class="card is-warning game-mode-flag-option cssanimation blurInTop" onclick="onPlayerSelectAnswerInFlagMode(this)">
              <div class="card-content center-image margin-0-auto flag-mode-option-item-wrapper">
                <figure class="image margin-0-auto">
                  <img src="https://flagcdn.com/128x96/ru.webp" class="flag-mode-option-items not-gallery-item img-reset-brightness">
                </figure>
              </div>
            </div>
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
