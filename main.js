var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}

 
//const faqs = document.querySelectorAll(".fq");
 
//faqs.forEach((fq)=>{
 // fq.addEventListener("click" , ()=> {
//fq.classList.toggle("active");

 // })
//}
//);

const faqs = document.querySelectorAll(".fq");
let activeFaq = null;

faqs.forEach((fq) => {
  fq.addEventListener("click", () => {
    if (activeFaq && activeFaq !== fq) {
      activeFaq.classList.remove("active");
    }
    fq.classList.toggle("active");
    activeFaq = fq.classList.contains("active") ? fq : null;
  });
});







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




