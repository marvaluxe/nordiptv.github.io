(function($) {

	"use strict";

	// Form
	var contactForm = function () {
		if ($('#contactForm').length > 0) {
			$("#contactForm").validate({
				rules: {
					name: "required",
					subject: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					subject: "Please enter your subject",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via mailto */
				submitHandler: function (form) {
					var name = $('#name').val();
					var subject = $('#subject').val();
					var email = $('#email').val();
					var message = $('#message').val();

					// Create mailto link
					var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) +
						'&body=' + encodeURIComponent('Name: ' + name + '\n\nMessage: ' + message);

					// Open the default email client
					window.location.href = mailtoLink;
				},
				errorPlacement: function (error, element) {
					// Customize error messages for specific elements if needed
					if (element.attr("name") === "name") {
						error.insertAfter("#name"); // Example: Display error message after the input with name "name"
					} else {
						error.insertAfter(element);
					}
				}
			});
		}
	};
	contactForm();

})(jQuery);
