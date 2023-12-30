import React from 'react';
import { AboutImage, AboutS, AboutText, ButtonAbout } from './style';

import AboutImg from './image/about.png';

export const AboutC = () => {
	return (
		<AboutS>
			<div className='container-about'>
				<AboutText>
					<h3 className='title-about'>Juan Bueno</h3>
					<p className='paragrafo-about'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
						est vitae eros vulputate pellentesque. Vestibulum accumsan risus
						nibh, a posuere velit semper ut. Integer consectetur ligula non
						massa sollicitudin, ut dignissim sem semper. Quisque semper sapien
						vitae ligula dictum, at efficitur diam suscipit.
					</p>
					<ButtonAbout>
						<button className='btn-about btn1'>WhatsApp</button>
						<button className='btn-about btn2'>Instagram</button>
					</ButtonAbout>
				</AboutText>
				<AboutImage>
					<img src={AboutImg} alt='about' className='image-about' />
				</AboutImage>
			</div>
		</AboutS>
	);
};
