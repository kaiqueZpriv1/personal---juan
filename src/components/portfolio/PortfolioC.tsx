import React from 'react';
import { ImagePortfolio, PortfolioS } from './style';

import P1 from './image/galeria1.jpg';
import P2 from './image/galeria2.jpg';
import P3 from './image/galeria3.jpg';
import P4 from './image/galeria4.jpg';
import P5 from './image/galeria5.jpg';
import P6 from './image/galeria6.jpg';
import { Fade } from 'react-awesome-reveal';

export const PortfolioC = () => {
	return (
		<PortfolioS>
			<div className='container-portfolio'>
				<Fade direction='left'>
					<ImagePortfolio>
						<img src={P1} alt='portfolio' className='image-portfolio' />
					</ImagePortfolio>
				</Fade>

				<Fade direction='down' duration={3000}>
					<ImagePortfolio>
						<img src={P2} alt='portfolio' className='image-portfolio' />
					</ImagePortfolio>
				</Fade>
				<Fade direction='right' duration={3000}>
					<ImagePortfolio>
						<img src={P3} alt='portfolio' className='image-portfolio' />
					</ImagePortfolio>
				</Fade>

				<Fade direction='left' duration={3000}>
					<ImagePortfolio>
						<img src={P4} alt='portfolio' className='image-portfolio' />
					</ImagePortfolio>
				</Fade>
				<Fade direction='up' duration={3000}>
					<ImagePortfolio>
						<img src={P5} alt='portfolio' className='image-portfolio' />
					</ImagePortfolio>
				</Fade>
				<Fade direction='right' duration={3000}>
					<ImagePortfolio>
						<img src={P6} alt='portfolio' className='image-portfolio' />
					</ImagePortfolio>
				</Fade>
			</div>
		</PortfolioS>
	);
};
