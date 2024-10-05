import React from 'react';
import ReactDOM from 'react-dom';
import './FrontPage.css';
import Header from '../general/Header';
import image from './all.svg';

function FrontPage() {
    const gotoHome = () => {
        window.location.href = '/sustainify/home';
    }
    return (
        <div className="front-page">
            <Header />
            <div className="welcome-text">WELCOME TO SUSTAINIFY</div>
            <div className="front-page__content">
                <div className="front-page__bottom">
                    <img src={image} alt="logos" className="front-page__image" />
                </div>
                <div className='description--container'>
                    <div className="description--content">
                        <h1>What is Sustainify?</h1>
                        <p>Sustainify is a platform that aims to raise awareness about the environment and sustainability. We provide games, quizzes, and information about the environment to educate and engage users. Our goal is to encourage users to take action and make a positive impact on the planet.</p>
                        <button className="front-page__button" onClick={gotoHome} style={{fontFamily:'Jost', color:'black'}}>Start Your SDG Journey!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;

ReactDOM.render(<FrontPage />, document.getElementById('root'));
