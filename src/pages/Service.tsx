import React from "react";
import Global from "../Global";
import { HeaderC } from "../components/header/HeaderC";
import { ServiceC } from "../components/service/ServiceC";
import { ContatoC } from "../components/Contato/ContatoC";

export const Service = () => {
    return(
        <>
            <Global/>
            <HeaderC/>
            <ServiceC/>
            <ContatoC/>
        </>
    )
}