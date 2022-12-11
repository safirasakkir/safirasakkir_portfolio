$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});



//typing animation script



var typed = new Typed(".typing",{
    strings: ["Developer","Freelancer","Designer","Traveller"],
    typeSpeed: 200,
    backSpeed: 150,
    backspaceSpeed: 20,
    backspaceDelay: 100,
    repeatDelay: 1000,
    repeat: true,
    autoStart: true,
    startDelay: 100,
    loop: true
});