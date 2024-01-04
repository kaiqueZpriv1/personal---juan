import styled from 'styled-components';

export const HeaderS = styled.header`
	width: 100%;
	background-color: #25262b;
	height: 75px;
	position: fixed;
	z-index: 9;
	box-shadow: 0 0 5px #000;
	.container-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 100px;
	}
	.icon-burger {
		display: none;
	}
	@media (max-width: 480px) {
		& {
			width: 100%;
			top: 0;
			height: 75px;
		}
		.icon-burger {
			display: block;
			z-index: 9;
			position: fixed;
			left: 10px;
		}
		.container-header {
			justify-content: space-around;
		}
	}
`;

export const RouterHeader = styled.div`
	display: flex;
	gap: 20px;
	margin-right: 150px;
	@media (max-width: 480px) {
		& {
			background-color: #25262b;
			display: flex;
			flex-direction: column;
			padding: 90px 0 30px 0;
			margin-left: 15px;
			position: fixed;
			border-radius: 10px;
			transition: 0.5s;
			overflow: hidden;
			z-index: 8;
			gap: 35px;
			width: 0;
			left: 0;
			top: 0;
		}
	}
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
	@media (max-width: 480px) {
		& {
			font-size: 2em;
		}
		&:hover::before {
			width: 70%;
		}
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
	/* display: none; */
	&:hover {
		transition: 1s;
		transform: scale(1.1);
	}
	@media (max-width: 480px) {
		& {
			display: none;
		}
	}
`;
