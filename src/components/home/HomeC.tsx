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
import Img1 from './image/musculação/item-1.png'
import Img2 from './image/musculação/item-3.png'
export const HomeC = () => {
	return (
		<>
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
							<HomeButton>Portfólio</HomeButton>
							<HomeButton>Contato</HomeButton>
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
					<img src={Img1} alt='musculação' className='img-detail'/>
					<h3 className='text-details'>Ganho de massa</h3>
					<img src={Img2} alt='musculação' className='img-detail'/>
					<h3 className='text-details'>Reabilitação física</h3>
				</div>
			</HomeDetails>
		</>
	);
};
