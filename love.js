const loveSprayer = document.querySelector('.loveSprayer');
const header = document.querySelector('.text');

header.classList.add('activeText');

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

run();

loveSprayer.addEventListener('click', run);

presentation = () => {
  const loveImg = document.querySelectorAll('.loveImg');
  const next = document.querySelector('#next');
  const previous = document.querySelector('#previous');

  let currentStep = 0;
  loveImg[0].classList.add("active");

  nextAction = () => {
    active('next');
    for(img of loveImg) {
      if(img.classList.contains('active')) {
        if(img.children[0].alt === 'posner') header.innerText = 'Posner';
        else if(img.children[0].alt === 'albert') header.innerText = 'Albert'; ;
      }
    }
  }

  previousAction = () => {
    active('previous');
  }

  active = (direction) => {
    loveImg[currentStep].classList.remove('active');
  
    if(direction == "next") {
      if(currentStep < loveImg.length - 1)
        currentStep++;
      else{
        currentStep = 0;
      }
    }
  
    else if(direction == "previous") {
      if(currentStep > 0)
        currentStep--;
      else{
        currentStep = loveImg.length - 1;
      }
    }
  
    showCurrent(currentStep);
    run();
  }
  
  const showCurrent = (i) => {
    loveImg[i].classList.add("active");
  };

next.addEventListener('click', nextAction);
previous.addEventListener('click', previousAction);

};
presentation();
    