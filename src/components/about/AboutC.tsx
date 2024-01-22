import React from 'react';
import { AboutImage, AboutS, AboutText, ButtonAbout } from './style';

import AboutImg from './image/about.png';
import { Fade } from 'react-awesome-reveal';

export const AboutC = () => {
	return (
		<AboutS>
			<Fade cascade direction='up'>
				<div className='container-about'>
					<AboutText>
						<h3 className='title-about'>Juan Bueno</h3>
						<p className='paragrafo-about'>
							Sou Juan Bueno, personal trainer há 3 anos. Sou apaixonado pela
							profissão e sempre busco me aperfeiçoar para oferecer o melhor
							atendimento aos meus alunos. Tenho experiência em diversos tipos
							de treinamento, desde musculação e aeróbico até treinamento
							funcional. Sou um profissional dedicado e comprometido com os
							resultados dos meus alunos, tenho vasta experiência em treinamento
							personalizado, o que me permite oferecer um atendimento
							personalizado e eficaz. Amo o que faço e isso se reflete no meu
							trabalho.
						</p>
						<ButtonAbout>
							<a
								href='https://api.whatsapp.com/send/?phone=5511954886575&text&type=phone_number&app_absent=0'
								target='_blank'
								rel='noreferrer'
								className='btn-about btn1'>
								WhatsApp
							</a>
							<a
								href='https://www.instagram.com/personal.juanbueno/'
								target='_blank'
								rel='noreferrer'
								className='btn-about btn2'>
								Instagram
							</a>
						</ButtonAbout>
					</AboutText>
					<AboutImage>
						<img src={AboutImg} alt='about' className='image-about' />
					</AboutImage>
				</div>
			</Fade>
		</AboutS>
	);
};
