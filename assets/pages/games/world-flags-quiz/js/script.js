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
    fetch('/assets/pages/games/world-flags-quiz/data/data.json')
    .then((response) => data.country = response.json())
    .then((json) => console.log(json));
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
            $('#game-play').removeClass('display-none')
            $(gameModeWrapperElement[opt]).removeClass('display-none')
        })
    }, 50)
    // sparkles()
}

function flagModeLoadQuestion() {

}

ready(function(){
    // do something
    loadCountryData()
});

function congrats(event){
    // const element = event
    // party.confetti(element, {
    //   count: party.variation.range(20, 40),
    //   shapes: ["star"],
    // });
    sparkles()
}

