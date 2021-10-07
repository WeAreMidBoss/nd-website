$(window).bind("load", function() { 


$('.baffle').each(function () {
    const b = baffle(this, {
        characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"]
    })
    $(this).data('baffle', b)
    checkVisible($(this))
})
function checkVisible($el) {
    if (!$el.hasClass('.baffle-visible')) {
        const top_of_element = $el.offset().top
        const bottom_of_element = $el.offset().top + $el.outerHeight()
        const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()
        const top_of_screen = $(window).scrollTop()
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            $el.addClass('.baffle-visible')
            const b = $el.data('baffle')
            b.start().reveal(500, 700)
        }
    }
}
$(window).scroll(function () {
    $('.baffle').each(function () {
        const $el = $(this)
        checkVisible($el)
    })
})

});

