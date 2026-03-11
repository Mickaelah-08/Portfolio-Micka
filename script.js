const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  const circle = skill.querySelector('.circle');
  const percentSpan = circle.querySelector('.percent');
  const percent = skill.getAttribute('data-percent');
  const color = skill.getAttribute('data-color');
  let current = 0;
  
  const interval = setInterval(() => {
    if(current >= percent){
      clearInterval(interval);
    } else {
      current++;
      percentSpan.textContent = current + '%';
      circle.style.background = `conic-gradient(${color} ${current * 3.6}deg,#f5f5f5  0deg)`;
    }
  }, 15);
});