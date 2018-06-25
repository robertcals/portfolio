import React from 'react';
import './About.css';
import { Jumbotron } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import Tilt from 'react-tilt';

import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})

const About = () => {
	return(
		<ScrollableAnchor id={'about'}>
			<div className="aboutStyle" >
				<article className="vh-100 dt w-100 ">
					<h1 className=" f1 lh-title fw6 tc">About Me</h1>
		   			<div className='pa0 mt0'>
						<Tilt className="Tilt  tiltStyle" options={{ max : 10 }}  >
		 					<div className="Tilt-inner  ">
		 						 <img className='tiltStyle'  src='https://raw.githubusercontent.com/robertcals/images/master/Portfolio/scan0016.jpg' alt='Logo'/> 
		 					</div>
						</Tilt>
					</div>		
					      <Jumbotron className="ma4">    						
					        <p className="lead">My name is Roberto Caldeira,I am a full stack web developer from Portugal and now I am deeply entrenched in the big city of Berlin.I've always been obsessed with learning, this naturally led me to the fast-moving world of coding.
I started my journey as a developer in the fall of 2015.Starting my development journey,I have fallen more in love with the process. I started my way by learning <b>HTML,CSS,MYSQL</b> and then began <b>working my way through JavaScript.</b>
Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine.<b>Developed a crowdfunding website and managed the website from concept to production.</b>
					        <a href="https://www.ertin.org" rel="noopener noreferrer" target="_blank">www.ertin.org</a> Since then,<b> I have build my skillset by learning React,Redux,Bootstrap, SASS, Node.js,Node express and PostgreSQL</b>.Everyday I encounter new and exciting challenges as
 I continue to hone my skills by building creative designs, responsive sites; always with the hope of making my little corner of the internet a nicer place.
When I'm not hacking away at a computer I play the guitar.Some of my other passions include food, beer, bikes, and travelling.
 </p>
					        <hr className="my-2" />
					        <p>Take a look at some of my work under the Portfolio section</p>
					        <div className="ma4">
					        <p className="lead ">

					         <a className="aboutButtonStyle tc fw6" href='#portfolio'>Portfolio </a>
					          
					        </p>
					        </div>
					      </Jumbotron>					
				</article>	
			</div>
		</ScrollableAnchor>
		);
}

export default About;
