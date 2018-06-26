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
					
	   				 <br/>
	   				 <a className="buttonStyle tc fw6" href='#about'>About Me </a>	   				
	  			</div>
			</article>		
		</div>
		</ScrollableAnchor>
		);
}

export default Header;
