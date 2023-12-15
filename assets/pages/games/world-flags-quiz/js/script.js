
// Declare variables
let scoreChangeLabel = undefined;
let scoreLabel =  undefined;
const data = {
    country: []
}

const preload = {
    flagMode: null
}

const score = 0

const gameModeWrapperElement = {
    flag: "#game-mode-flag",
    country: "#game-mode-country",
}

const sounds  = {
    magicalSpell: new Audio('/assets/pages/games/world-flags-quiz/sounds/Magic-Spell-A-Medium-www.fesliyanstudios.com.mp3'),
    magicalHit: new Audio('/assets/pages/games/world-flags-quiz/sounds/magical-hit-45356.mp3'),
    incorrect: new Audio('/assets/pages/games/world-flags-quiz/sounds/incorrect.mp3'),
    mouseHover: new Audio('/assets/pages/games/world-flags-quiz/sounds/mouse-hover.mp3'),
    questionIntro: new Audio('/assets/pages/games/world-flags-quiz/sounds/question-intro.mp3')
}

const predefinedClassName = {
    correctAnswer: 'correct-answer',
    tadaAnimation: ['animate__animated', 'animate__tada'],
    wobbleAnimation: ['animate__animated', 'animate__wobble'],
    blinkText: 'blink-text',
    selected: 'selected'
}

function flagModeResetOptions(){
    for (let i = 0; i < 4; i++) {
        $(`.game-mode-flag-option:eq(${i})`).addClass('cssanimation blurInTop')
        $(`.game-mode-flag-option:eq(${i})`).removeClass('selected')
    }
}

function onClickStartButton(event) {
    // sparkles()
    showSparkles(event)
    for (let i = 0; i < 4; i++) {
        $(`.game-mode-flag-option:eq(${i})`).addClass('cssanimation blurInTop')
    }
    setTimeout(()=>{
        $("#welcome-screen").fadeOut(100, ()=>{
            $("#choose-game-modes-screen").removeClass('display-none')
            $("#choose-game-modes-screen").fadeIn(100, function(){
                const gameModeOptions = $('.game-mode-option')
                for (const gameModeItem of gameModeOptions) {
                    gameModeItem.classList.remove("display-none")
                }
            })
        })
    }, 50)
    // Preload: Flag mode
    flagModePreloadNextQuestion()
}

function loadCountryData() {
    return fetch('/assets/pages/games/world-flags-quiz/data/data.json')
    .then((response) => response.json())
    .then((json) => json);
}

function backToHome(event) {
    showSparkles(event)
    $("#game-play").addClass('cssanimation blurOutBottom')
    setTimeout(()=>{
        $("#game-play").removeClass('cssanimation blurOutBottom')
        $("#game-play").addClass('display-none')
        $("#choose-game-modes-screen").fadeOut(100, ()=>{
            $("#welcome-screen").fadeIn()
            flagModeResetOptions()
        })
    },50)
}

function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

function chooseGameMode(opt, event) {
    showSparkles(event)
    setTimeout(()=>{
        $('#game-screen').addClass("game_step_" + opt)
        $('#game-screen').removeClass("game_step_home")
        $('#choose-game-modes-screen').fadeOut(100,  function(){
            flagModeLoadNewQuestion()
            $('#game-play').removeClass('display-none')
            $(gameModeWrapperElement[opt]).removeClass('display-none')
        })
    }, 50)
    // sparkles()
}

function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}

function getRandomElements(arr, numElements) {
    let shuffled = arr.slice(0);
    let result = [];
    let length = shuffled.length;

    for (let i = length - 1; i >= length - numElements; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
        result.push(shuffled[i]);
    }

    return result;
}

function randomOneItem(items){
    return items[Math.floor(Math.random()*items.length)];
}

function  getRandomNumber(max) {
    return Math.floor(Math.random()*max)
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function flagModePreloadNextQuestion() {
    preload.flagMode = null
    const randomCountries = shuffleArray(getRandomElements(data.country, 4))
    const randomIndex = getRandomNumber(randomCountries.length)
    const chosenCountry = randomCountries?.[randomIndex]
    const result = {
        randomCountries,
        randomIndex,
        chosenCountry
    }
    preload.flagMode = result
    // Preload image
    randomCountries.forEach(ctry => {
        preload_image(ctry?.flags?.png)
    });
    return {
        randomCountries,
        randomIndex,
        chosenCountry
    }
}


function flagModeLoadNewQuestion() {
    if (!preload.flagMode) {
        flagModePreloadNextQuestion()
    }

    const { randomCountries, randomIndex, chosenCountry } = preload.flagMode
    if (chosenCountry) {
        $('#flag-question-country-name').text(chosenCountry?.name?.official)
        for (let i = 0; i < 4; i++) {
            const wrapperOfAnswerItem =  $(`.game-mode-flag-option:eq(${i})`)
            const answerItem = $(`img.flag-mode-option-items:eq(${i})`)
            answerItem.attr('src', randomCountries[i]?.flags?.png);
            if (i ===randomIndex) {
                answerItem.addClass(predefinedClassName.correctAnswer)
                wrapperOfAnswerItem.addClass(predefinedClassName.correctAnswer)
            } else {
                answerItem.removeClass(predefinedClassName.correctAnswer)
                wrapperOfAnswerItem.removeClass(predefinedClassName.correctAnswer)
            }
        }
    }
    // Preload next question 
    flagModePreloadNextQuestion()
}

function scoreUp(score) {
    scoreChangeLabel.text("+" + score)
    scoreChangeLabel.addClass('cssanimation blurInTop').removeClass('is-invisible')
    setTimeout(()=>{
        scoreLabel.addClass('cssanimation blurOutBottom')
        scoreChangeLabel.addClass('cssanimation blurOutBottom')
        setTimeout(()=>{
            scoreLabel.text(Number(scoreLabel.text()) + score)
            scoreLabel.removeClass('blurOutBottom')
            scoreLabel.addClass('cssanimation blurInTop')
        }, 200)
        setTimeout(()=>{
            scoreChangeLabel.removeClass('cssanimation blurOutBottom blurInTop')
            scoreChangeLabel.addClass('is-invisible')
        }, 200)
    },500)
}

function flagModeGotoNextQuestion() {
    playSound(sounds.questionIntro)
    $('#flag-question').addClass('cssanimation blurOutBottom')
    $('#flag-question').removeClass('blurInBottom')

    for (let i = 0; i < 4; i++) {
        $(`.game-mode-flag-option:eq(${i})`).addClass('cssanimation blurOutTop')
        $(`.game-mode-flag-option:eq(${i})`).removeClass(predefinedClassName.selected)
    }

    setTimeout(()=>{
        // Reshow new question
        $('#flag-question').addClass('cssanimation blurInBottom')
        $('#flag-question').removeClass('blurOutBottom')

        for (let i = 0; i < 4; i++) {
            console.log( $(`.game-mode-flag-option:eq(${i})`))
            $(`.game-mode-flag-option:eq(${i})`).removeClass('blurOutTop')
            $(`.game-mode-flag-option:eq(${i})`).addClass('cssanimation blurInTop')
        }
        flagModeLoadNewQuestion()
    }, 500)
}

function onPlayerSelectAnswerInFlagMode(event) {
    // console.log(event)
    // event for class .game-mode-flag-option, check flagModeLoadNewQuestion
    event.classList.remove('cssanimation')
    const animationEffect = {
        true: predefinedClassName.tadaAnimation,
        false: predefinedClassName.wobbleAnimation
    }
    const isAnswerCorrect = event.classList.contains(predefinedClassName.correctAnswer)
    const hasAlreadySelected = event.classList.contains(predefinedClassName.selected)
    const chosenEffect = animationEffect[isAnswerCorrect]
    event.classList.add(...chosenEffect, predefinedClassName.selected)
    setTimeout(()=>{
        event.classList.remove(...chosenEffect)
    },1000)
    if (isAnswerCorrect){
        playSound(sounds.magicalHit)
        party.confetti(event)
        if (!hasAlreadySelected) {
            scoreUp(10)
        }
        return
    } 
    playSound(sounds.incorrect)
    // If player has chosen an incorrect answer  -->  show correct answer
    const correctAnswerItem = $('.game-mode-flag-option.correct-answer')
    correctAnswerItem.addClass('selected')
    party.confetti(correctAnswerItem[0])
}

ready(async function(){
    // do something

    // set variables after dom has loaded
    scoreChangeLabel = $('#score-change')
    scoreLabel =  $('#score')
    // Update score initially
    scoreLabel.text(score)

    data.country  = await loadCountryData()
});

function playSound(snd) {
    snd.currentTime=0;
    snd.play();
}

function showSparkles(event){
    // const element = event
    // party.confetti(element, {
    //   count: party.variation.range(20, 40),
    //   shapes: ["star"],
    // });
    playSound(sounds.magicalSpell)
    sparkles()
}

