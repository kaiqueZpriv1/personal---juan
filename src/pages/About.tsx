import React from 'react';
import Global from '../Global';
import { HeaderC } from '../components/header/HeaderC';
import { AboutC } from '../components/about/AboutC';
import { ContatoC } from '../components/Contato/ContatoC';

export const About = () => {
	return (
		<>
			<Global />
			<HeaderC />
			<AboutC />
			<ContatoC />
		</>
	);
};
