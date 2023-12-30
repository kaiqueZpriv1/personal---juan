import styled from 'styled-components';

export const HeaderS = styled.header`
	width: 100%;
	background-color: #25262b;
	height: 75px;
	position: fixed;
	z-index: 9;
	.container-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 100px;
	}
`;

export const RouterHeader = styled.div`
	display: flex;
	gap: 20px;
`;

export const RouterText = styled.h3`
	color: #d8d9d7;
	cursor: pointer;
	font-size: 1.3em;
	font-weight: 600;
	position: relative;
	&:hover {
		transform: scale(1.1);
		transition: 1s;
		color: #ba181b;
	}
	&::before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #ba181b;
		visibility: hidden;
		transition: all 0.9s ease-in-out;
	}
	&:hover::before {
		visibility: visible;
		width: 100%;
	}
`;

export const ButtonHeader = styled.button`
	padding: 7px 15px;
	border-radius: 15px;
	background-color: #ba181b;
	font-size: 1.3em;
	font-weight: 700;
	border: none;
	color: #d8d9d7;
	&:hover {
		transition: 1s;
		transform: scale(1.1);
	}
`;
