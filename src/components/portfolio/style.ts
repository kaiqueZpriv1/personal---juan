import styled from 'styled-components';

export const PortfolioS = styled.section`
	padding: 200px 110px 100px 110px;
	display: flex;
	justify-content: center;
	align-items: center;
	.container-portfolio {
		display: grid;

		grid-template-columns: 300px 300px 300px;
		align-items: center;
		justify-content: center;
		gap: 20px 90px;
	}
	@media (max-width: 480px) {
		& {
			padding: 200px 40px 100px 0;
		}
		.container-portfolio {
			gap: 20px;
			grid-template-columns: 280px;
		}
	}
`;

export const ImagePortfolio = styled.div`
	.image-portfolio {
		width: 350px;
		border-radius: 10px;
	}
	.image-portfolio:hover {
		transform: scale(1.2);
		transition: 1s;
	}
	@media (max-width: 480px) {
		.image-portfolio {
			width: 350px;
		}
		.image-portfolio:hover {
			transform: scale(1.1);
		}
	}
`;
