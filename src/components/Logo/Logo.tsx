import React from 'react';
import styled from 'styled-components';
import ImgPersonal from './image/J-removebg-preview.png';

export const Logo = () => {
	const LogoS = styled.div`
		display: flex;
		align-items: center;
		/* display: none; */
		.image-logo {
			width: 80px;
		}
		.text-logo {
			display: flex;
			flex-direction: column;
		}
		.title-logo {
			font-size: 1em;
			color: #ba181b;
		}
		.sub-text-logo {
			font-size: 0.8em;
			color: #d8d9d7;
		}
	`;
	return (
		<LogoS>
			<img src={ImgPersonal} alt='personal' className='image-logo' />
			<div className='text-logo'>
				<h3 className='title-logo'>Juan Bueno</h3>
				<p className='sub-text-logo'>Personal Trainer</p>
			</div>
		</LogoS>
	);
};
