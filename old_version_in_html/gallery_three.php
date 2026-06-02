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
                    <img src="assets/photo_gallery/a37.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a38.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a39.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a40.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a41.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a42.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a43.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a44.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a45.jpg" class="gallery-item" alt="gallery">
                </div>
                <div class="col">
                    <img src="assets/photo_gallery/a46.jpg" class="gallery-item" alt="gallery">
                </div>
            </div>
        </div>
    </div>

    <div class="aaaaP">
        <nav aria-label="Page navigation example ">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="gallery.php" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="gallery.php">1</a></li>
                <li class="page-item"><a class="page-link" href="gallery_one.php">2</a></li>
                <li class="page-item"><a class="page-link" href="gallery_two.php">3</a></li>
                <li class="page-item"><a class="page-link" href="gallery_three.php">4</a></li>
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