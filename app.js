$(document).ready(function(){
    $('.toggle').click(function(){
        $(this).toggleClass('active')
        $('nav.menu').toggleClass('isopen')
        return(false)
    })
    $('nav.menu ul li a').click(function(){
        $('nav.menu').removeClass('isopen')
        return(false)
    })
})