import React from 'react';
import ReactDOM from 'react-dom';
import {quotes} from './quo';
import {pictures} from './pictures';
import ("./index.css")


function Page(){
    return <body style={pageBackground()}><QuoteBox /></body>;
}

function pageBackground(){
    return {
        backgroundImage: `url(${process.env.PUBLIC_URL + pictures[Math.floor(Math.random()*10)]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'scroll'
    }
}
function QuoteText({num}){
    var temp = Math.floor(Math.random()*10);
    return <h1 >"{quotes[num][0]}"</h1>
}

function QuoteBy({num}){
    return <h3>{quotes[num][1]}</h3>
}

function QuoteBox(){
    var temp = Math.floor(Math.random()*quotes.length);
    
    return <article>
        <div><QuoteText num={temp}/></div>
        <div><QuoteBy num={temp}/></div>
    </article>
}
ReactDOM.render(<Page />, document.getElementById("root"));