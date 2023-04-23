import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const myElement = document.getElementById('myApp');
const myRoot = createRoot(myApp);

const title = '';
//imports background image
const background = (
    <img
    className='background'
    alt='ocean'
    src='/images/ocean.jpg'
    />
)

//toggles background
const showBackground = true;

const images = [];
//populates images array
for (const animal in animals){
    images.push(
        <img 
        key={animal}
        className='animal'
        alt={animal}
        src={animals[animal].image}
        arialabel={animal}
        role='button'
        onClick={displayFact}
        />
    )
}
//displays content on page
const animalFacts = (
<div>
    <h1>
        {title === '' ? 'Click an animal for a fun fact' : title}
    </h1>
    {showBackground && background}
    <p id='fact'></p>
    <div className='animals' >
        {images}
    </div>
</div>
);
//logic behind interation with images
function displayFact(e){
    const select = e.target.alt;
    const info = animals[select];
    const index = Math.floor(Math.random() * info.facts.length);
    const funFacts = info.facts[index];
    document.getElementById('fact').innerHTML = funFacts;
}
ReactDOM.render(animalFacts, document.getElementById('root'))