
<footer class="footer">
        <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
        </div>

        <div class="ftt">

            <div class="your-website-wrapper">
                <form action="#" class="your-website-card-content">
                    <div class="your-website-container">
                        <img src="whir_logo.png" alt="NordIPTV" width="150vh">
                        <h1>Subscribe</h1>
                        <p>Subscribe to our newsletter and stay updated.</p>
                    </div>
                    <div class="your-website-form-input">
                        <label for="your-website-email"></label>
                        <input type="email" placeholder="Your Email">
                        <button class="your-website-subscribe-btn">Subscribe</button>
                    </div>
                </form>
            </div>
            <div>
                <ul class="social-icon">

                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a></li>
                </ul>
                <ul class="menu_footer">
                    <li class="menu_footer__item"><a class="menu_footer__link" href="index.html">Home</a></li>
                    <li class="menu_footer__item"><a class="menu_footer__link" href="#">About</a></li>
                    <li class="menu_footer__item"><a class="menu_footer__link" href="privacy-policy.html">Privacy
                            Policy</a></li>
                    <li class="menu_footer__item"><a class="menu_footer__link" href="terms-of-service.html">Terms of
                            service</a></li>
                    <li class="menu_footer__item"><a class="menu_footer__link" href="contact-us.html">Contact</a></li>

                </ul>
            </div>
        </div>
        <p>&copy;2024 NordIPTV | All Rights Reserved</p>
    </footer>
    <!-- footer -->

    <script>
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


        /*MODIFICATION END*/

        /*MODIFICATION END*/

    </script>
    <script src="main.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>



    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.
    3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7SkØGln4gmtz2MlQnikT1wXgYs0g+OMhuP
    +ILRH9SENBOOLRn5q+8nbTov4+1p" cross origin="anonymous"></script>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

</body>

</html>