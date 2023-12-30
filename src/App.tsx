import React from 'react';
import Global from './Global';
import { HeaderC } from './components/header/HeaderC';
import { HomeC } from './components/home/HomeC';
import { AboutC } from './components/about/AboutC';
import { ServiceC } from './components/service/ServiceC';
import { ResultadoC } from './components/resultado/ResultadoC';
import { PortfolioC } from './components/portfolio/PortfolioC';
import { ContatoC } from './components/Contato/ContatoC';

function App() {
	return (
		<div className='App'>
			<Global />
			<HeaderC/>
			<HomeC/>
			<AboutC/>
			<ServiceC/>
			<ResultadoC/>
			<PortfolioC/>
			<ContatoC/>
		</div>
	);
}

export default App;
