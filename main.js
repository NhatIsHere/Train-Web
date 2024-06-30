const heart = document.querySelector(".heart");
const animationHeart = document.querySelector
(".animation-heart");

heart.addEventListener('click', () =>{
    heart.classList.add('fill-color');
    animationHeart.classList.add('animation');
    
});

animationHeart.addEventListener('click', () =>
{
    animationHeart.classList.remove
    ('animation');
    heart.classList.remove('fill-color');
});