const loveSprayer = document.querySelector('.loveSprayer');

const greatPeople = [
   {
    name: 'Mike Posner',
    skill: 'Hit Songs',
    knownFor: 'I took a pill in Ibiza, In the Arms of a stranger',
    quote: `"My smiles don\'t result from good things, they result in good things."`,
    profession: 'Singer',
  },

  {
    name: 'Albert Eintien',
    skill: 'Best work in Physics',
    knownFor: 'Theory of Relativity',
    quote: `"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."`,
    profession: 'Physicist',
  },

  {
    name: 'Fela Kuti',
    skill: 'Hit Songs',
    knownFor: 'I.T.T. (International Thief Thief), Gentle man',
    quote: `"The music of Africa is big sound: it’s the sound of a community."`,
    profession: 'Singer and Activist',
  },
]

const mike = greatPeople[0];
const albert = greatPeople[1];
const fela = greatPeople[2];

textAnim = () => {
  const sk1 = document.querySelector('.sk1');
  const sk2 = document.querySelector('.sk2');

  sk1.style.cssText = `animation: textAnim1 500ms;`
  setTimeout(()=> {sk1.style.cssText = `animation: none;`}, 600);
  sk2.style.cssText = `animation: textAnim1 500ms;`
  setTimeout(()=> {sk2.style.cssText = `animation: none;`}, 600);
}

user = (personObject) => {
  const skill = document.querySelector('#skill');
  const knownFor = document.querySelector('#knownFor');
  const quote = document.querySelector('#quote');
  const name = document.querySelectorAll('.name');

  skill.innerText = personObject.skill;
  knownFor.innerText = personObject.knownFor;
  quote.innerText =personObject.quote;
  for (names of name ) { 
    names.innerText = personObject.name;
    names.style.cssText = `animation: textAnim 200ms;`
    setTimeout(()=> {names.style.cssText = `animation: none;`}, 200);
  }

  textAnim();

  profession.innerText = personObject.profession;
}

presentation = () => {
  const loveImg = document.querySelectorAll('.loveImg');
  const next = document.querySelectorAll('.next');
  const previous = document.querySelectorAll('.previous');

  let currentStep = 0;
  // loveImg[currentStep].classList.add("active");

  nextAction = () => {
    active('next');
    for(img of loveImg) {
      if(img.classList.contains('active')) {
        if(img.children[0].alt === 'posner') user(mike);
        else if(img.children[0].alt === 'albert') user(albert);
        else if(img.children[0].alt === 'fela') user(fela);
      }  
    }
  }

  previousAction = () => {
    active('previous');
    for(img of loveImg) {
      if(img.classList.contains('active')) {
        if(img.children[0].alt === 'posner') user(mike);
        else if(img.children[0].alt === 'albert') user(albert);
        else if(img.children[0].alt === 'fela') user(fela);
      }
    }
  }

  active = (direction) => {
    loveImg[currentStep].classList.remove('active');
  
    if(direction == "next") {
      if(currentStep < loveImg.length - 1) currentStep++;
      else{
        currentStep = 0;
      }
    }
  
    else if(direction == "previous") {
      if(currentStep > 0) currentStep--;
      
      else{
        currentStep = loveImg.length - 1;
      }
    }
  
    showCurrent(currentStep);
    // setTimeout(()=>{run()}, 500);
  }
  
  const showCurrent = (position) => {
    loveImg[position].classList.add("active");
  };

  for (nexts of next ) { nexts.addEventListener('click', nextAction); };
  for (previouss of previous ) { previouss.addEventListener('click', previousAction); };

};

presentation();

run = () => {
  const color = ["blue", "yellow", "brown", "green"];
    
  for(i=1; i<=20; i++) {
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
  love.classList.add('show');
  love.style.cssText = `
  transform: translate(${Math.floor(Math.random() * 301) - 150}%, -${Math.floor(Math.random() * 1500)}%) scale(${Math.random()});
  `
    // a delay of 1000m/s is made to remove each love shape created in the loop 
    setTimeout( ()=> {loveSprayer.removeChild(love)}, 2000);
};

loveSprayer.addEventListener('click', run);

run();
user(mike);
    