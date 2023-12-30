import React from 'react';
import { AboutService, BoxService, ServiceBoxing, ServiceS } from './style';
import { ButtonAbout } from '../about/style';

import Orientacao from './image/orientação.png'
import Planejamento from './image/planejamento.png'
import Suporte from './image/suporte.png'

export const ServiceC = () => {
	return (
		<ServiceS>
			<div className='container-service'>
				<BoxService>
					<ServiceBoxing>
						<img src={Planejamento} alt='service' className='icon-service' />
						<h3 className='text-service'>Planejamento personalizado</h3>
					</ServiceBoxing>
                        <ServiceBoxing style={{background: '#d8d9d7'}}>
						<img src={Orientacao} alt='service' className='icon-service' />
						<h3 style={{color: '#343a40'}} className='text-service'>Orientação na prática</h3>
					</ServiceBoxing>
					<ServiceBoxing>
						<img src={Suporte} alt='service' className='icon-service' />
						<h3 className='text-service'>Suporte emocional</h3>
					</ServiceBoxing>
				</BoxService>
				<AboutService>
					<h3 className='title-service'>O que faz um personal trainer ?</h3>
					<p className='paragrafo-service'>
						O Personal Trainer vai preparar e acompanhar os seus treinos de
						forma a realizar os exercícios com segurança, sendo responsavel por
						orientar a prática correta de exercícios físicos, fornecer suporte
						emocional e inserir um planejamento estratégico na rotina diária dos
						seus clientes, para proporcionar um condicionamento adequado, com
						finalidade estética, de reabilitação, de treino ou de manutenção da
						saúde. 
					</p>
					<ButtonAbout>
						<button className='btn-about btn2'>Consultoria</button>
					</ButtonAbout>
				</AboutService>
			</div>
		</ServiceS>
	);
};
