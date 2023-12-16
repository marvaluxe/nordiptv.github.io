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

 



// lang

// function changeLang(language, el) {
//   var container = document.querySelector('.chooseLang').classList;
//   el = el.classList;

//   if (container.contains('open')) {
//       container.remove('open');
//       if (!el.contains('chosen')) {
//           document.querySelector('.chooseLang .chosen').classList.remove('chosen');
//           el.add('chosen');

         
//           var languageFileName = getLanguageFileName(language);
//           window.location.href = languageFileName;

//           console.log(language + ' chosen');
//       }
//       return;
//   }

//   container.add('open');
// }


// function getLanguageFileName(language) {
//   return 'index_' + language + '.html';
// }
// lang


function changeLang(language, el) {
  // Get the class list of the element with the 'chooseLang' class
  var container = document.querySelector('.chooseLang').classList;
  // Get the class list of the element that triggered the function
  el = el.classList;

  // Check if the language selection container is open
  if (container.contains('open')) {
      // If open, close it
      container.remove('open');
      // Check if the clicked language is not already chosen
      if (!el.contains('chosen')) {
          // Remove the 'chosen' class from the previously chosen language
          document.querySelector('.chooseLang .chosen').classList.remove('chosen');
          // Add the 'chosen' class to the clicked language
          el.add('chosen');

          // Redirect the user to the corresponding HTML file for the selected language
          var languageFileName = getLanguageFileName(language);
          window.location.href = languageFileName;

          // Log the selected language to the console
          console.log(language + ' chosen');
      }
      return;
  }

  // If the language selection container is closed, open it
  container.add('open');
}

// Function to get the corresponding HTML file for the selected language
function getLanguageFileName(language) {
  // Default to 'index.html' if the language is English, else use 'index_<language>.html'
  return language === 'en' ? 'index.html' : 'index_' + language + '.html';
}










$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});














document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

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




