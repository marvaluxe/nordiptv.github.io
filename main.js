const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

 
jQuery(document).ready(function () {
    /*MODIFICATION START*/
    jQuery(window).on('scroll', function () {
        if (jQuery(window).scrollTop() > jQuery('#first-sec').height()) {
            /*MODIFICATION END*/
            jQuery(".progress-bar").each(function () {
                jQuery(this).find(".progress-content").animate({
                    width: jQuery(this).attr("data-percentage")
                }, 2000);

                jQuery(this).find(".progress-number-mark").animate({
                    left: jQuery(this).attr("data-percentage")
                }, {
                    duration: 2000,
                    step: function (now, fx) {
                        var data = Math.round(now);
                        jQuery(this).find(".percent").html(data + "%");
                    }
                });
            });
            /*MODIFICATION START*/
        }
    });
    /*MODIFICATION END*/
}); 