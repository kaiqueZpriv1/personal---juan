import styled from 'styled-components';

export const AboutS = styled.section`
	padding: 100px 110px 0 110px;
	display: flex;
	align-items: center;
	justify-content: center;
	.container-about {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
`;

export const AboutText = styled.div`
	width: 450px;
	display: flex;
	gap: 20px;
	flex-direction: column;
	.title-about {
		font-size: 2em;
		font-weight: 700;
		color: #ba181b;
	}
	.paragrafo-about {
		font-size: 1em;
		color: #d8d9d7;
		font-weight: 500;
	}
`;

export const ButtonAbout = styled.div`
margin-top: 10px;
	display: flex;
	gap: 15px;
	.btn-about {
		padding: 10px 15px;
		border-radius: 10px;
		font-size: 1em;
		border: none;
		font-weight: 700;
	}
	.btn-about:hover{
		transform: scale(1.1);
		transition: 1s;
		box-shadow: 0 0 5px #000;
	}
	.btn1 {
		background: #ba181b;
		color: #d8d9d7;
	}
	.btn1:hover {
		background: #d8d9d7;
		color: #ba181b;
	}
	.btn2 {
		background: #d8d9d7;
		color: #ba181b;
	}
	.btn2:hover {
		background: #ba181b;
		color: #d8d9d7;
	}
`;

export const AboutImage = styled.div`
	width: 50%;
	.image-about {
		width: 330px;
		height: 400px;
		border-radius: 10px;
	}
`;
