import styled from 'styled-components';

export const ResultadoS = styled.section`
	padding: 200px 110px 0 110px;
	display: flex;
	justify-content: center;
	align-items: center;
	.container-resultado {
		display: grid;
		grid-template-columns: 800px;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}
	@media (max-width: 480px) {
		.container-resultado {
			grid-template-columns: 400px;
		}
	}
`;

export const ResultadoBoxing = styled.div`
	padding: 20px;
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: center;
	.image-resultado {
		width: 200px;
		border-radius: 20px;
		border: 2px solid #ba181b;
		box-shadow: 0 0 10px #000;
	}
	.text-resultado {
		font-size: 1.5em;
		color: #d8d9d7;
		font-weight: 600;
	}
	@media (max-width: 480px) {
		& {
			flex-direction: column;
		}
		.image-resultado {
			width: 250px;
		}
		.text-resultado {
			text-align: center;
		}
	}
`;
