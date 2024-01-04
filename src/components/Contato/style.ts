import styled from 'styled-components';

export const ContatoS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 100px 110px 20px 110px;
	.container-contato {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 150px;
	}
	@media (max-width: 480px) {
		& {
			padding: 100px 0 0 0;
		}
		.container-contato {
			flex-direction: column;
			gap: 20px;
		}
	}
`;

export const PageContato = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	.title-contato {
		font-size: 2em;
		color: #ba181b;
		font-weight: 700;
		margin-bottom: 10px;
	}
	.text-contato {
		font-size: 1em;
		color: #495057;
		font-weight: 500;
	}
	.text-contato:hover {
		color: #d8d9d7;
		transform: scale(1.1);
		transition: 1s;
	}
	@media (max-width: 480px) {
		.text-contato {
			font-size: 2.5em;
		}
		.text-contato {
			font-size: 1.5em;
			text-align: center;
		}
	}
`;
