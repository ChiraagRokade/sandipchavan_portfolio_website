<!-- /****@author Chiraag Rokade <chiraagrokade@gmail.com>*/ -->
<!-- HEADER -->
<?php
include "assets/header.php";
?>
<!-- HEADER -->
<!-- MAIN -->
<section class="container-fluid aaaaH">
    <div class="text-center">
        <h3 class="aaaaA">Constact</h3>
        <a href="index.php">Home</a>
        <span><i class="fas fa-arrow-right"></i></span>
        <a href="contact.php">Contact</a>
    </div>
</section>
<!-- CONTACT FORM -->
<div class="container aaaaJ">
    <div class="overlay">
        <section class="mb-4">
            <div class="row">
                <!--Grid column-->
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        <!--Grid row-->
                        <div class="row">
                            <!--Grid column-->
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="name" class="">Your name</label>
                                    <input type="text" id="name" name="name" class="form-control">
                                </div>
                            </div>
                            <!--Grid column-->
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="email" class="">Your email</label>
                                    <input type="text" id="email" name="email" class="form-control">
                                </div>
                            </div>
                        </div>
                        <!--Grid row-->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <label for="subject" class="">Subject</label>
                                    <input type="text" id="subject" name="subject" class="form-control">
                                </div>
                            </div>
                        </div>
                        <!--Grid row-->
                        <div class="row">
                            <!--Grid column-->
                            <div class="col-md-12">
                                <div class="md-form">
                                    <label for="message">Your message</label>
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="text-center text-md-left" style="margin-top: 1rem;">
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div class="status"></div>
                </div>
                <!--Grid column-->
                <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p class="aaaaK">MIT-World Peace University</p>
							<p class="aaaaK">MIT-WPU Faculty of Engineering & Technology</p>
							<p class="aaaaK">School of Mechanical Engineering</p>
							<p class="aaaaK">S.No.124, Paud Road, Kothrud, Pune, 411038</p>
                        </li>
                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p class="aaaaK">Tel No: 020 – 7117 7105</p>
							<p class="aaaaK">Tel No: 020 – 7117 7104</p>
							<p class="aaaaK">Mon to Fri 9am to 6 pm</p>
                        </li>
                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p class="aaaaK">sandip.chavan@mitpune.edu.in</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</div>
<!-- CONTACT FORM -->
<!-- MAIN -->
<!-- FOOTER -->
<?php
include "assets/footer.php";
?>
<!-- FOOTER -->