var loveSprayer = document.querySelector('.loveSprayer');
var btn = document.querySelector('.btn');

    run = () => {
      var loveBubble = `<svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3665 0.746976C23.0705 -2.71102 18.0915 6.96898 18.0915 6.96898C18.0915 6.96898 
                        13.1125 -2.71102 4.81652 0.745976C-4.26848 4.53098 1.22651 17.801 7.16851 23.148C12.6965 28.127 
                        18.0915 29.372 18.0915 29.372C18.0915 29.372 23.4865 28.128 29.0155 23.149C34.9565 17.801 40.4515 
                        4.53198 31.3665 0.746976Z" />
                        </svg>`
                    
        
        for(i=1; i<30; i++) {
            let love = document.createElement('SPAN');
            love.className = 'spn';
            love.innerHTML = loveBubble;
            loveSprayer.appendChild(love);
          
          setTimeout( ()=> {
            love.classList.toggle('show');
            love.style.cssText = `transform: 
             translate(${Math.floor(Math.random() * 301) - 150}%, -${Math.floor(Math.random() * 2000)}%);`
             setTimeout( ()=> {loveSprayer.removeChild(love)}, 1000);
          } , 50*(i))

        }
    }

    btn.addEventListener('click', run);
    