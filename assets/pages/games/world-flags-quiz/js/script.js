const gameModeWrapperElement = {
    flag: "#game-mode-flag",
    country: "#game-mode-country",
}

function onClickStartButton() {
    $("#welcome-screen").fadeOut(100, ()=>{
        $("#choose-game-modes-screen").removeClass('display-none')
        $("#choose-game-modes-screen").fadeIn(100, function(){
            const gameModeOptions = $('.game-mode-option')
            for (const gameModeItem of gameModeOptions) {
                gameModeItem.classList.remove("display-none")
            }
        })
    })
}

function loadData() {
    fetch('https://server.com/data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function backToHome() {
    $("#game-play").addClass('display-none')
    $("#choose-game-modes-screen").fadeOut(100, ()=>{
        $("#welcome-screen").fadeIn()
    })
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

function chooseGameMode(opt) {
    $('#game-screen').addClass("game_step_" + opt)
    $('#game-screen').removeClass("game_step_home")
    $('#choose-game-modes-screen').fadeOut(100,  function(){
        $('#game-play').removeClass('display-none')
        $(gameModeWrapperElement[opt]).removeClass('display-none')
    })
}

ready(function(){
    // do something
    loadData()
});


