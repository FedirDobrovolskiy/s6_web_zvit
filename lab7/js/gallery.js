// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const instance = basicLightbox.create(`
                <img src="${imgSrc}" width="100%">
            `);
            instance.show();
        });
    });
});
