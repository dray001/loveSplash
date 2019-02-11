const loveSprayer = document.querySelector('.loveSprayer');
const loveImg = document.querySelectorAll('.loveImg');
const btn = document.querySelector('.btn');
const clck = document.querySelector('#click');

run = () => {
  const color = ["blue", "yellow", "brown", "green"];
    
  for(i=1; i<=30; i++) {
        // for each loop, creat a love shape
        const love = document.createElement('SPAN');
        love.className = 'spn';

        let loveBubble = `
        <svg width="16" class="love-svg luv" height="13" viewBox="0 0 16 13" fill=${color[Math.floor(Math.random()*3)]}
         xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4.62997C16 9.91224 8 12.8201 8 12.8201C8 12.8201 0 9.91224 0 4.62997C0 -1.82008 8 -0.510024 8 2.5C8 -0.510024 16 -1.82009 16 4.62997Z"/>
        </svg>

        `

        // for each loop, throw svg content to the span created

        love.innerHTML = loveBubble;
          // append to parentContaner
        loveSprayer.appendChild(love);
      
        setTimeout(() => {
          loveInfo(love, loveSprayer);
        }, 20 * (i * 2));
      
  }
}

loveInfo = (love, loveSprayer) => {
          
  // a delay of i*20m/s is made to add this styles for each love shape created in the loop
  love.classList.add('show');
  love.style.cssText = `
  transform: translate(${Math.floor(Math.random() * 301) - 150}%, -${Math.floor(Math.random() * 1500)}%) scale(${Math.random()});
  `
    // a delay of 1000m/s is made to remove each love shape created in the loop 
    setTimeout( ()=> {loveSprayer.removeChild(love)}, 2000);
};

let count = 0;

active = () => {
    loveImg[count].classList.add('active');
    console.log(count);
    count++;
    if(count === 4) {
      count = 0;
      for (let img of loveImg) {
        img.classList.add('active');
      }
    }
    run();
}

run();

loveSprayer.addEventListener('click', run);
clck.addEventListener('click', active);
    