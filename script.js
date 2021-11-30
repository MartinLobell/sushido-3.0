
// jQuery-function, "Fade-in-with-scroll-animation". Only applied on desktop screens and wider.
if (window.innerWidth > 992) {
    $(document).ready(function () {
        $(window).scroll(function () {
            $('.fadeIn').each(function (i) {

                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_object) {
                    $(this).animate({ 'opacity': '1' }, 500);
                }
            });
        });
    });
}

// Toggle between showing hamburger menu content.
function showLinks() {
    var x = document.getElementById('dropdownContent');
    if (x.style.display === "block")
    {
        x.style.display = "none";
    }
    else
    {
        x.style.display = "block";
    }
}

// Go to associated section when clicking menu item.
function clickScroll(clickedId) {
    document.getElementsByClassName('mainSections')[clickedId].scrollIntoView({behavior: "smooth"});
}