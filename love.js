const loveSprayer = document.querySelector('.loveSprayer');
const loveImg = document.querySelector('.loveImg');
let count = 0;

const greatPeople = [
   {
    name: 'Mike Posner',
    skill: 'Hit Songs',
    knownFor: 'I took a pill in Ibiza, In the Arms of a stranger',
    quote: `"My smiles don\'t result from good things, they result in good things."`,
    profession: 'Singer',
    source: 'https://res.cloudinary.com/dvipmwuzh/image/upload/v1553605566/posner.png',
    like: 20,
    increment: function() {
      return this.like++;}
  },

  {
    name: 'Albert Einstein',
    skill: 'Best work in Physics',
    knownFor: 'Theory of Relativity',
    quote: `"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."`,
    profession: 'Physicist',
    source: 'https://res.cloudinary.com/dvipmwuzh/image/upload/v1553605565/albert.png',
    like: 30,
    increment: function() {
      return this.like++;}
    
  },

  {
    name: 'Fela Kuti',
    skill: 'Hit Songs',
    knownFor: 'I.T.T. (International Thief Thief), Gentle man',
    quote: `"The music of Africa is big sound: it’s the sound of a community."`,
    profession: 'Singer and Activist',
    source: 'https://res.cloudinary.com/dvipmwuzh/image/upload/v1553605565/fela.png',
    like: 40,
    increment: function() {
      return this.like++;}
  },
]


user = (personObject, cont) => {
  const skill = document.querySelector('#skill');
  const knownFor = document.querySelector('#knownFor');
  const quote = document.querySelector('#quote');
  const name = document.querySelectorAll('.name');
  const nameMobile = document.querySelector('header h1');
  const likes = document.querySelector('.count');

  skill.innerText = personObject.skill;
  likes.innerText = personObject.like;
  knownFor.innerText = personObject.knownFor;
  quote.innerText =personObject.quote;
  loveImg.children[0].src = personObject.source;
  profession.innerText = personObject.profession;

  removeTransition = () => {
    names.style.cssText = `animation: none;`
    nameMobile.style.cssText = `animation: none;`
    // console.log('we');
  }

  for (names of name ) { 
    names.innerText = personObject.name;
    if(cont) {names.style.cssText = `animation: none;`}
    
    else {names.style.cssText = `animation: textAnim 200ms;`
    names.addEventListener('animationend', removeTransition);
    }
  }
    

  if(cont) {nameMobile.style.cssText = `animation: none;`}
  else {nameMobile.style.cssText = `animation: textAnim 200ms;`
  nameMobile.addEventListener('animationend', removeTransition);
  // setTimeout(()=> {nameMobile.style.cssText = `animation: none;`}, 200);
  }

  textAnim = () => {
    const sk1 = document.querySelector('.sk1');
    const sk2 = document.querySelector('.sk2');

    removeTransition = () => {
      sk1.style.cssText = `animation: none;`;
      sk2.style.cssText = `animation: none;`;
    }
  
    if(cont) {
      sk1.style.cssText = `animation: none;`
      sk2.style.cssText = `animation: none;`
    }
    else {
      sk1.style.cssText = `animation: textAnim1 200ms;`
      sk2.style.cssText = `animation: textAnim1 200ms;`
      sk1.addEventListener('animationend', removeTransition);
      sk2.addEventListener('animationend', removeTransition);
    }
    
  }

  textAnim();

}
user(greatPeople[0]);

presentation = () => {
  const next = document.querySelectorAll('.next');
  const previous = document.querySelectorAll('.previous');

  let currentStep = 0;

  nextAction = () => {
    active('next');
  }

  previousAction = () => {
    active('previous');
    }

  active = (direction) => {
    if(direction == "next") {
      if(currentStep < greatPeople.length - 1) currentStep++;
      else{
        currentStep = 0;
      }
    }
  
    else if(direction == "previous") {
      if(currentStep > 0) currentStep--;
      
      else{
        currentStep = greatPeople.length - 1;
      }
    }
  
    showCurrent(currentStep);
    count = currentStep;
  }

  removeTransition = () => {
    loveImg.classList.remove('active');
  }
  
  const showCurrent = (position) => {
    loveImg.classList.add('active');
    loveImg.addEventListener('animationend', removeTransition);
    user(greatPeople[position]);
  };

  for (nexts of next ) { nexts.addEventListener('click', nextAction); };
  for (previouss of previous ) { previouss.addEventListener('click', previousAction); };
}

presentation();

run = () => {
  const color = ["blue", "yellow", "brown", "green"];
  greatPeople[count].increment();
  user(greatPeople[count], true);
    
  for(i=1; i<=10; i++) { 
        // for each loop, creat a love shape
        const love = document.createElement('SPAN');
        love.className = 'spn';

        let loveBubble = `
        <svg class="love-svg luv" viewBox="0 0 16 13" fill=${color[Math.floor(Math.random()*3)]}
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
  love.style.cssText = `
  transform: translate(${Math.floor(Math.random() * 301) - 150}%, -${Math.floor(Math.random() * 1500)}%) scale(${Math.random()});
  `
    // a delay of 1000m/s is made to remove each love shape created in the loop 
    setTimeout( ()=> {loveSprayer.removeChild(love)}, 500);
};

loveSprayer.addEventListener('click', run);
