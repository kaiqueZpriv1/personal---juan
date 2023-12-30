import styled from 'styled-components';

export const ServiceS = styled.section`
	padding: 200px 110px 0 110px;
    display: flex;
    justify-content: center;
    align-items: center;
	.container-service {
		display: flex;
		justify-content: center;
		align-items: center;
        gap: 50px;
	}
`;

export const AboutService = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
    width: 500px;
	.title-service {
		font-size: 2em;
		color: #ba181b;
		font-weight: 700;
        text-shadow: 0 0 5px #000;
	}
	.paragrafo-service {
        text-shadow: 0 0 5px #000;
		font-size: 1em;
		font-weight: 500;
		color: #d8d9d7;
	}
`;

export const BoxService = styled.div`
	display: grid;
	grid-template-columns: 250px;
	gap: 10px;
	align-items: center;
	justify-content: center;
`;

export const ServiceBoxing = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    gap: 10px;
	justify-content: center;
	background-color: #ba181b;
    box-shadow: 0 0 10px #000;
    padding: 15px 10px;
    border: none;
    border-radius: 10px;
	.icon-service {
		width: 55px;
	}
	.text-service {
		font-size: 1em;
		color: #d8d9d7;
	}
`;
