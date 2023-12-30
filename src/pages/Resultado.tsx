import React from 'react';
import Global from '../Global';
import { ResultadoC } from '../components/resultado/ResultadoC';
import { ContatoC } from '../components/Contato/ContatoC';
import { HeaderC } from '../components/header/HeaderC';

export const Resultado = () => {
	return (
		<>
			<Global />
			<HeaderC/>
			<ResultadoC />
			<ContatoC />
		</>
	);
};
