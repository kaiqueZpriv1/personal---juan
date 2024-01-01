import React, { useState } from 'react';
import { ButtonHeader, HeaderS, RouterHeader, RouterText } from './style';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';

// import mobile
import { AiOutlineMenu } from 'react-icons/ai'

export const HeaderC = () => {

	const [menuMobile, setMenuMobile] = useState(true)
	const handleMenu = () => {
		setMenuMobile(!menuMobile)
	}

	return (
		<HeaderS>
			<div className='container-header'>
				<AiOutlineMenu className='icon-burger' size={50} color='#fafafa' onClick={handleMenu} />
				<Logo />
				<RouterHeader style={{width: menuMobile ? '0' : '65%'}} >
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
