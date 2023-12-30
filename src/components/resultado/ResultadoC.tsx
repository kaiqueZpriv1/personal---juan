import React from 'react';
import { ResultadoBoxing, ResultadoS } from './style';

import ResultadoImg1 from './imagem/resultado.jpeg';
import ResultadoImg2 from './imagem/resultado2.png';

import { Fade } from 'react-awesome-reveal';

export const ResultadoC = () => {
	return (
		<ResultadoS>
			<div className='container-resultado'>
				<Fade cascade damping={0.3} direction='left'>
					<ResultadoBoxing>
						<img
							src={ResultadoImg1}
							alt='resultado'
							className='image-resultado'
						/>
						<h3
							className='
                    text-resultado'>
							Em um programa de emagrecimento de 90 dias, obtivemos uma perda de
							peso de 11 kg de forma segura e sem lesões, graças a um
							planejamento personalizado que atende às necessidades individuais
						</h3>
					</ResultadoBoxing>

					<ResultadoBoxing>
						<h3
							className='
                    text-resultado'>
							Graças à dedicação de nosso cliente, alcançamos seu objetivo de
							perca de peso, seguindo um plano de alimentação saudável e
							exercícios personalizados. O cliente também recebeu orientação
							pessoal sobre como manter os resultados a longo prazo.
						</h3>
						<img
							src={ResultadoImg2}
							alt='resultado'
							className='image-resultado'
						/>
					</ResultadoBoxing>
				</Fade>
			</div>
		</ResultadoS>
	);
};
