<!-- /****@author Chiraag Rokade <chiraagrokade@gmail.com>*/ -->
<!-- HEADER -->
<?php
include "assets/header.php";
?>
<!-- HEADER -->
<!-- MAIN -->
<section class="container-fluid aaaaH">
    <div class="text-center">
        <h3 class="aaaaA">Gallery</h3>
        <a href="index.php">Home</a>
        <span><i class="fas fa-arrow-right"></i></span>
        <a href="gallery.php">Gallery</a>
    </div>
</section>
<section class="container">
    <div class="aaaaN">
        <div class="container-lg aaaaO">
            <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div class="col">
                    <img src="assets/photo_gallery/a1.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a2.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a3.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a4.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a5.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a6.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a7.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a8.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a9.png" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a10.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a11.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a12.jpg" class="gallery-item" alt="gallery">
                </div>
            </div>
        </div>
    </div>

    <div class="aaaaP">
        <nav aria-label="Page navigation example ">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="gallery.php">1</a></li>
                <li class="page-item"><a class="page-link" href="gallery_one.php">2</a></li>
                <li class="page-item"><a class="page-link" href="gallery_two.php">3</a></li>
                <li class="page-item"><a class="page-link" href="gallery_three.php">4</a></li>
                <li class="page-item">
                    <a class="page-link" href="gallery_one.php" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="gallery-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="img/1.jpg" class="modal-img" alt="modal img">
                </div>
            </div>
        </div>
    </div>
</section>
<!-- MAIN -->
<!-- FOOTER -->
<?php
include "assets/footer.php";
?>
<!-- FOOTER -->