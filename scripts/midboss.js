$(window).bind("load", function() { 

  function checkIfMobile(width) {
    if (width.matches) { // If media query matches
      var navbarList = document.getElementById("navbar-list").classList.remove("ml-auto");
    } else {
      var navbarList = document.getElementById("navbar-list").classList.add("ml-auto");
    }
  }
  
  var width = window.matchMedia("(max-width: 575px)");
  checkIfMobile(width); // Call listener function at run time
  width.addListener(checkIfMobile); // Attach listener function on state changes
  
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
            b.start().reveal(1500, 2500)
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

