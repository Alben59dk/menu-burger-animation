$(document).ready(function(){
    $("a.btn").click(function(){
        $("ul").slideToggle()
        return(false)
    })

    $('a.btn').click(function(){
        $('i').toggleClass('isopen')
        return(false)
    })
})