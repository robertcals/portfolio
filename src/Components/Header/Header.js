import React from 'react';
import './Header.css';
import Particles from 'react-particles-js';
import ScrollableAnchor from 'react-scrollable-anchor';
import 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})


const particlesOptions = {
particles: {
	number: {
		value:30,
		density: {
			enable: true,
			value_area: 800
		}
		}
	} 
}


const Header = () => {
	return(
		<ScrollableAnchor id={'home'}>
		<div className="headerStyle">
		<Particles className="particles"
              params={particlesOptions}
              
            />
       

			<article className="vh-100 dt w-100 ">
	  			<div className="dtc v-mid tc white ph3 ph4-l">



	  			<div class="intro">Hello, I'm Roberto Caldeira</div>
		<div class="tagline">Full Stack Dev | Code Fanatic | Open Source Enthusiast</div>
					<div class="icons-social">
			<a href="https://github.com/robertcals"  rel="noopener noreferrer" target="_blank"><i class="fa fa-github fa-4x"></i></a>
			<a href="https://www.linkedin.com/in/roberto-dm-caldeira/" rel="noopener noreferrer"target="_blank"> <i className="fa fa-linkedin fa-4x"></i></a>
			<a href="https://www.freecodecamp.org/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-free-code-camp fa-4x"></i></a>
			<a href="https://codepen.io/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-codepen fa-4x"></i></a>
			<a href="https://plus.google.com/u/0/109149023727326466626"  rel="noopener noreferrer" target="_blank"><i className="fa fa-google-plus fa-4x"></i></a>
			<a href="https://www.instagram.com/roberto_caldeir/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-instagram fa-4x"></i></a>
			<a href="https://in.pinterest.com/rigobertocaldei/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-pinterest fa-4x"></i></a>
			<a href="https://twitter.com/CaldeirRoberto"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-twitter fa-4x"></i></a>
			
    </div>
	   				 
	   				 <br/>
	   				 <a className="buttonStyle tc fw6" href='#about'>About Me </a>	   				
	  			</div>
			</article>		
		</div>
		</ScrollableAnchor>
		);
}

export default Header;
