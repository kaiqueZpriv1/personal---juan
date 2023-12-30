import React from 'react';
import { ContatoS, PageContato } from './style';
import { Logo } from '../Logo/Logo';
import { Fade } from 'react-awesome-reveal';

export const ContatoC = () => {
	return (
		<ContatoS>
			<Fade duration={1000} cascade>
				<Logo />
				<div className='container-contato'>
					<PageContato>
						<h3 className='title-contato'>Paginas</h3>
						<p className='text-contato'>Home</p>
						<p className='text-contato'>Sobre mim</p>
						<p className='text-contato'>Serviços</p>
						<p className='text-contato'>Portfólio</p>
					</PageContato>
					<PageContato>
						<h3 className='title-contato'>Redes Sociais</h3>
						<a
							href='https://api.whatsapp.com/send/?phone=5511954886575&text&type=phone_number&app_absent=0'
							target='_blank'
							rel='noreferrer'
							className='text-contato'>
							WhatsApp
						</a>
						<a
							href='https://www.instagram.com/personal.juanbueno/'
							target='_blank'
							rel='noreferrer'
							className='text-contato'>
							Instagram
						</a>
						<a
							href='https://www.instagram.com/personal.juanbueno/'
							target='_blank'
							rel='noreferrer'
							className='text-contato'>
							Facebook
						</a>
						<a
							href='mailto:juan_bueno478@hotmail.com?subject=&amp;body='
							target='_blank'
							rel='noreferrer'
							className='text-contato'>
							Email
						</a>
					</PageContato>
					<PageContato>
						<p className='text-contato'>Telefone: 11 95488-6575</p>
						<a
							href='mailto:juan_bueno478@hotmail.com?subject=&amp;body='
							target='_blank'
							rel='noreferrer'
							className='text-contato'>
							asasas@gmail.com
						</a>
						<p className='text-contato'></p>
					</PageContato>
				</div>
			</Fade>
		</ContatoS>
	);
};
