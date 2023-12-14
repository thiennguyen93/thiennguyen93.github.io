const data = {
    country: []
}

const gameModeWrapperElement = {
    flag: "#game-mode-flag",
    country: "#game-mode-country",
}

function onClickStartButton(event) {
    // sparkles()
    congrats(event)
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
}

function loadCountryData() {
    return fetch('/assets/pages/games/world-flags-quiz/data/data.json')
    .then((response) => response.json())
    .then((json) => json);
}

function backToHome(event) {
    congrats(event)
    setTimeout(()=>{
        $("#game-play").addClass('display-none')
        $("#choose-game-modes-screen").fadeOut(100, ()=>{
            $("#welcome-screen").fadeIn()
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
    congrats(event)
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


function flagModeLoadNewQuestion() {
    const randomCountries = shuffleArray(getRandomElements(data.country, 4))
    const randomIndex = getRandomNumber(randomCountries.length)
    const chosenCountry = randomCountries?.[randomIndex]
    if (chosenCountry) {
        $('#flag-question-country-name').text(chosenCountry?.name?.official)
        $('img.flag-mode-option-items:eq(0)').attr('src', `https://flagcdn.com/${randomCountries[0]?.cca2?.toLowerCase()
    }.svg`);
        for (let i = 0; i < 4; i++) {
            $(`img.flag-mode-option-items:eq(${i})`).attr('src', randomCountries[i]?.flags?.png);
        }
    }
    console.log(randomCountries)
}

ready(async function(){
    // do something
    data.country  = await loadCountryData()
});

function congrats(event){
    // const element = event
    // party.confetti(element, {
    //   count: party.variation.range(20, 40),
    //   shapes: ["star"],
    // });
    sparkles()
}

