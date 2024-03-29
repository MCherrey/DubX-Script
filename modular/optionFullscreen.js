//optionFullscreen.js
var isFullscreen = false;
function fullscreenOff() {
    $('#room-comments').show();
    $('.main-page-container').removeClass('fullscreenFix');
    $('#main-room').removeClass('fullscreenParent');
    $('.left_section').removeClass('fullscreenLeft');
    $('.right_section').removeClass('fullscreenRight');
    $('#chat').removeClass('fullscreenChat');
    $('.chat-messages').removeClass('fullscreenChatChild');
    $('#main_player').removeClass('fullscreenVideo');
    $('.player_container').removeClass('fullscreenVideoChild');
    $('#player-controller').removeClass('fullscreenController');
    isOn = "off";
    localStorage.setItem('isFullscreen','false');
    $('.bY .isOnOff i').replaceWith('<i class="fi-x"></i>');
}
function optionFullscreen() {
    var isOn;
    if (!isFullscreen) {
        isFullscreen = true;
        $('#room-comments').hide();
        $('.main-page-container').addClass('fullscreenFix');
        $('#main-room').addClass('fullscreenParent');
        $('.left_section').addClass('fullscreenLeft');
        $('.right_section').addClass('fullscreenRight');
        $('#chat').addClass('fullscreenChat');
        $('.chat-messages').addClass('fullscreenChatChild');
        $('#main_player').addClass('fullscreenVideo');
        $('.player_container').addClass('fullscreenVideoChild');
        $('#player-controller').addClass('fullscreenController');
        isOn = "on";
        localStorage.setItem('isFullscreen','true');
        $('.bY .isOnOff i').replaceWith('<i class="fi-check"></i>');
    } else {
        isFullscreen = false;
        fullscreenOff();
    };
};

if (localStorage.getItem('isFullscreen') === 'true') {
    optionFullscreen();
};

$('.bY').click(optionFullscreen);        
function disableFullscreen() {
    isFullscreen = false;
    fullscreenOff();
};
$('.user-info-button').click(disableFullscreen);
window.addEventListener("resize", function(){
    var windowWidth = $(window).width();
    if (windowWidth <= 1185) {
        disableFullscreen();
    } else {
        //do nothing
        return false;
    }
}, true);
