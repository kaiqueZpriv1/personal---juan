import React from 'react';
import { ButtonHeader, HeaderS, RouterHeader, RouterText } from './style';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';

export const HeaderC = () => {
	return (
		<HeaderS>
			<div className='container-header'>
				<Logo />
				<RouterHeader>
					<Link to='/'>
						<RouterText>Inicio</RouterText>
					</Link>
					<Link to='/sobre'>
						<RouterText>Sobre</RouterText>
					</Link>
					<Link to='/servico'>
						<RouterText>Serviço</RouterText>
					</Link>
					<Link to='/resultado'>
						<RouterText>Resultados</RouterText>
					</Link>
					<Link to='/portfolio'>
						<RouterText>Portfólio</RouterText>
					</Link>
				</RouterHeader>
				<Link to='/contato'>
					<ButtonHeader>Contato</ButtonHeader>
				</Link>
			</div>
		</HeaderS>
	);
};
