import { keyframes } from "styled-components";

const Bubble = keyframes`
    0% {
        -webkit-transform: scale(1);
            transform: scale(1);
    }

    25% {
        -webkit-transform: scale(0.9);
            transform: scale(0.9);
    }

    66% {
        -webkit-transform: scale(1.1);
            transform: scale(1.1);
    }

    100% {
        -webkit-transform: scale(1);
            transform: scale(1);

    }
`;

export default Bubble;
