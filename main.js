var images = document.querySelectorAll('.container .image-test.image-action');
var gallery = document.querySelector('.gallery');
var close = document.querySelector('.action.close');
var galleryImage = document.querySelector('.gallery_inner img');

var currentIndex = 0;
images.forEach((item, index) => {
    item.addEventListener('click', function (){
        galleryImage.setAttribute('src', images[index].src);
        gallery.classList.add('show');
    });
});

close.addEventListener('click', function(){
    gallery.classList.remove('show');
});