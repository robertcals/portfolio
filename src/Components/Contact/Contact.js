import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import 'font-awesome/css/font-awesome.min.css';


import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})

const Contact =() => {
	
	return(
		<ScrollableAnchor id={'contact'}>
			<div className="contactStyle" >
				<article className=" dt w-100 ">
					<h1 className=" f1 lh-title fw6 tc">Contact me</h1>
		   			 <Container>	
		   			 
						   		<div><i class="fa fa-phone fa-4x"></i><h3>
						        	+49 17658896022</h3>
						        	</div>
						        	<div><i class="fa fa-skype fa-4x"></i><h3>
							        	robertcals</h3>
							        	</div>
						        	<div><i class="fa fa-envelope fa-4x"></i><h3>
							        	robertodmcaldeira@gmail.com</h3>
						        	</div>
				        	
					    </Container>
				</article>	
			</div>
		</ScrollableAnchor>
		);
}

export default Contact;