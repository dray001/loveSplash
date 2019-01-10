const loveSprayer = document.querySelector('.loveSprayer');
const btn = document.querySelector('.btn');

    run = () => {
      const color = ["blue", "yellow", "brown", "green"];
      

        for(i=1; i<=30; i++) {
            // for each loop, creat a love shape
            const love = document.createElement('SPAN');
            love.className = 'spn';

            // for each loop, assign new svg content for the love shape with different colors
            let loveBubble = `<svg width="37" class="love-svg luv" height="30" viewBox="0 0 37 30" 
              fill=${color[Math.floor(Math.random()*3)]} 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M31.3665 0.746976C23.0705 -2.71102 18.0915 6.96898 18.0915 6.96898C18.0915 6.96898 
              13.1125 -2.71102 4.81652 0.745976C-4.26848 4.53098 1.22651 17.801 7.16851 23.148C12.6965 28.127 
              18.0915 29.372 18.0915 29.372C18.0915 29.372 23.4865 28.128 29.0155 23.149C34.9565 17.801 40.4515 
              4.53198 31.3665 0.746976Z" />
              </svg>`

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

    btn.addEventListener('click', run);
    