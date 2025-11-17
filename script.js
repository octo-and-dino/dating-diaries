const items = document.querySelectorAll('.timeline-item');

function isInViewport(el){
  const rect = el.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50;
}

function animateTimeline(){
  items.forEach(item => {
    if(isInViewport(item)){
      item.style.opacity = 1;
      item.style.transform = 'translateY(0) scale(1)';
    }
  });
}

window.addEventListener('scroll', animateTimeline);
window.addEventListener('load', animateTimeline);
