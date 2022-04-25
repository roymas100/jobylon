import { keyframes } from "styled-components";

const bubbleUp = keyframes`
0% {
    -webkit-transform: scale(0);
        transform: scale(0);
}
80% {
    -webkit-transform: scale(1.1);
        transform: scale(1.1);
}
100% {
    -webkit-transform: scale(1);
        transform: scale(1);

}
`;

export default bubbleUp;
