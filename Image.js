const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

document.querySelector('.image-container').addEventListener('mouseenter', () => {
    image1.classList.add('hidden');
    image2.classList.remove('hidden');
});

document.querySelector('.image-container').addEventListener('mouseleave', () => {
    image1.classList.remove('hidden');
    image2.classList.add('hidden');
});

