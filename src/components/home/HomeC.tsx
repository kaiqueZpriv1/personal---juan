import React from 'react';
import {
	CampButton,
	HomeButton,
	HomeDetails,
	HomeImage,
	HomeS,
	HomeText,
} from './style';
import TypewriterComponent from 'typewriter-effect';
import HomeImg from './image/juan-image-home.png';
import Img1 from './image/musculação/item-1.png';
import Img2 from './image/musculação/item-3.png';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
export const HomeC = () => {
	return (
		<>
			<Fade cascade direction='left'>
				<HomeS>
					<div className='container-home'>
						<HomeText>
							<h3 className='subtext-home'>Personal Treiner</h3>
							<h3 className='title-home'>
								<TypewriterComponent
									options={{
										strings: ['Juan Bueno'],

										autoStart: true,
										loop: true,
										skipAddStyles: true,
									}}
								/>
							</h3>
							<p className='paragrafo-home'>
								Especialista em entregar resultados !
							</p>
							<CampButton>
								<Link to='/portfolio'>
									<HomeButton>Portfólio</HomeButton>
								</Link>
								<Link to='/contato'>
									<HomeButton>Contato</HomeButton>
								</Link>
							</CampButton>
						</HomeText>
						<HomeImage>
							<img className='image-home' alt='juan' src={HomeImg} />
						</HomeImage>
					</div>
				</HomeS>
				<HomeDetails>
					<div className='container-details'>
						<h3 className='text-details'>Perca de peso</h3>
						<img src={Img1} alt='musculação' className='img-detail' />
						<h3 className='text-details'>Ganho de massa</h3>
						<img src={Img2} alt='musculação' className='img-detail' />
						<h3 className='text-details'>Reabilitação física</h3>
					</div>
				</HomeDetails>
			</Fade>
		</>
	);
};
