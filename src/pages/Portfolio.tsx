import React from "react";
import Global from "../Global";
import { HeaderC } from "../components/header/HeaderC";
import { PortfolioC } from "../components/portfolio/PortfolioC";
import { ContatoC } from "../components/Contato/ContatoC";


export const Portfolio = () => {
    return(
        <>
            <Global/>
            <HeaderC/>
            <PortfolioC/>
            <ContatoC/>
        </>
    )
}