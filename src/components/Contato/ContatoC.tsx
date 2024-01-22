import React from 'react';
import { ContatoS, PageContato } from './style';
import { Logo } from '../Logo/Logo';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
export const ContatoC = () => {
	return (
		<ContatoS>
			<Fade duration={1000} cascade>
				<Logo />
				<div className='container-contato'>
					<PageContato>
						<Link to='/'>
							<p className='text-contato'>Inicio</p>
						</Link>
						<Link to='/sobre'>
							<p className='text-contato'>Sobre</p>
						</Link>
						<Link to='/servico'>
							<p className='text-contato'>Serviço</p>
						</Link>
						<Link to='/resultado'>
							<p className='text-contato'>Resultados</p>
						</Link>
						<Link to='/portfolio'>
							<p className='text-contato'>Portfólio</p>
						</Link>
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
							href='https://www.facebook.com/juan.bueno.73'
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
						<a
							href='https://criarmeulink.com.br/u/1704410269'
							target='_blank'
							rel='noreferrer'
							className='text-contato'>
							Telefone: 11 95488-6575
						</a>
						<a
							href='mailto:juan_bueno478@hotmail.com?subject=&amp;body='
							target='_blank'
							rel='noreferrer'
							className='text-contato'>
							juan_bueno478@hotmail.com
						</a>
						<p className='text-contato'>São Paulo - SP</p>
					</PageContato>
				</div>
			</Fade>
		</ContatoS>
	);
};
