import { createGlobalStyle } from "styled-components";

import PoppinsRegularTTF from "./fonts/Poppins-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${PoppinsRegularTTF}) format('ttf'),
    }

    * {
      font-family: "Poppins", sans-serif !important;
    }
`;
