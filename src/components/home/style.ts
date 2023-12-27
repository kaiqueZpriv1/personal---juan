import styled from 'styled-components';

export const HomeS = styled.main`
	width: 100%;
	padding: 200px 110px 0 110px;
	.container-home {
		display: flex;
	}
`;

export const HomeText = styled.div`
	display: flex;
	flex-direction: column;
	.title-home {
		font-size: 3.5em;
		color: #ba181b;
		font-weight: 700;
	}
	.subtext-home {
		font-size: 1.5em;
		color: #d8d9d7;
		font-weight: 500;
	}
	.paragrafo-home {
		font-size: 1.5em;
		color: #d8d9d7;
		font-weight: 500;
	}
`;
export const CampButton = styled.div`
	display: flex;
	gap: 20px;
`;
export const HomeButton = styled.button`
	margin-top: 50px;
	padding: 10px 20px;
	border: none;
	border-radius: 10px;
	background-color: #ba181b;
	font-size: 1.3em;
	color: #d8d9d7;
	&:hover {
		transform: scale(1.1);
		transition: 1s;
	}
`;

export const HomeImage = styled.div`
	position: relative;
	left: 210px;
	bottom: 90px;
	.image-home {
		width: 500px;
		border-radius: 10px;
		filter: drop-shadow(15px 15px 50px rgba(0, 0, 0, 1));
	}
`;

export const HomeDetails = styled.div`
	background-color: #000;
	width: 100%;
	position: relative;
	bottom: 14px;
	padding: 20px 110px 20px 110px;
	.container-details {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.text-details {
		font-size: 1em;
		color: #ba181b;
		font-weight: 600;
	}
	.img-detail {
		width: 40px;
	}
`;
