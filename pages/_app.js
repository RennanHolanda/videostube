import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CSSReset } from '../src/components/CSSReset'
import ColorModelProvider,{ColorModeContext} from '../src/components/Menu/components/ColorMode';
import RegisterVideo from '../src/components/RegisterVideo';

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

// _app.js -> Definições lobais do NextJS
//ThemeProvider -> Prove o tema para a app toda
//ColorModelProvider -> Prove o state de ligth ou dark para todo mundo

function ProviderWrapper(props) {
    return (
        <ColorModelProvider initialMode={"light"}>
            {props.children}
        </ColorModelProvider>
    )
}

function Myapp({ Component, pageProps}) {
    const contexto = React.useContext(ColorModeContext);
    return(
        <ThemeProvider theme={theme[contexto.mode]}>
        <CSSReset/>
        <Component {...pageProps} />
        <RegisterVideo />
        </ThemeProvider> 
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <Myapp {...props} />
        </ProviderWrapper>
    )
}