import { createGlobalStyle } from 'styled-components';

import recboeot from '../../assets/fonts/Recoleta-Bold.eot';
import recbowoff2 from '../../assets/fonts/Recoleta-Bold.woff2';
import recbowoff from '../../assets/fonts/Recoleta-Bold.woff';
import recbottf from '../../assets/fonts/Recoleta-Bold.ttf';

import akmedeot from '../../assets/fonts/AktivGrotesk-Medium.eot';
import akmedwoff2 from '../../assets/fonts/AktivGrotesk-Medium.woff2';
import akmedwoff from '../../assets/fonts/AktivGrotesk-Medium.woff';
import akmedttf from '../../assets/fonts/AktivGrotesk-Medium.ttf';

import faregeot from '../../assets/fonts/Favorit-Regular.eot';
import faregwoff2 from '../../assets/fonts/Favorit-Regular.woff2';
import faregwoff from '../../assets/fonts/Favorit-Regular.woff';
import faregttf from '../../assets/fonts/Favorit-Regular.ttf';

import recmeeot from '../../assets/fonts/Recoleta-Medium.eot';
import recmewoff2 from '../../assets/fonts/Recoleta-Medium.woff2';
import recmewoff from '../../assets/fonts/Recoleta-Medium.woff';
import recmettf from '../../assets/fonts/Recoleta-Medium.ttf';


export const Typography = createGlobalStyle`

@font-face {
    font-family: 'Recoleta Bold';
    src: url('${recboeot}');
    src: url('${recboeot}?#iefix') format('embedded-opentype'),
        url('${recbowoff2}') format('woff2'),
        url('${recbowoff}') format('woff'),
        url('${recbottf}') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Aktiv Grotesk Medium';
    src: url('${akmedeot}');
    src: url('${akmedeot}?#iefix') format('embedded-opentype'),
        url('${akmedwoff2}') format('woff2'),
        url('${akmedwoff}') format('woff'),
        url('${akmedttf}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Favorit Regular';
    src: url('${faregeot}');
    src: url('${faregeot}?#iefix') format('embedded-opentype'),
        url('${faregwoff2}') format('woff2'),
        url('${faregwoff}') format('woff'),
        url('${faregttf}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Recoleta Medium';
    src: url('${recmeeot}');
    src: url('${recmeeot}?#iefix') format('embedded-opentype'),
        url('${recmewoff2}') format('woff2'),
        url('${recmewoff}') format('woff'),
        url('${recmettf}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}


:root {
    --reBold: 'Recoleta Bold';
    --akMed: 'Aktiv Grotesk Medium';
    --faReg: 'Favorit Regular';
    --reMed: 'Recoleta Medium';
}

h1, h2, h3, h4 {
    font-weight: normal;
}

`