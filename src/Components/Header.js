import React, { Component } from 'react';

class Header extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner dark-overlay">
        <br />
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name} <span role="img" aria-label="orange">🍊</span></h1>
            <h3 className="new-line">I'm a <span>{occupation}</span> in {city}. {"\n"} {description}
            {"\n"}<b>Programmer<span role="img" aria-label="laptop">💻</span>
            , Traveller<span role="img" aria-label="plane">✈️</span>
            , Cook<span role="img" aria-label="cook">👨‍🍳️</span>
            , Eater<span role="img" aria-label="eat">🍝</span>
            {"\n"}</b>
            </h3>
            <hr />
            <h3 className="new-line">Currently I am serving quarantine in Shenzhen... <span role="img" aria-label="mask">😷</span></h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>
      

      <p className="img-description">Photo Taken in January 2020, Paris<span role="img" aria-label="tower">🗼</span>, Paris<span role="img" aria-label="france"> 🇫🇷</span></p>
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
