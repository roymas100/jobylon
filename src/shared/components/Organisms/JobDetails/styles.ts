import styled from "styled-components";

export const DetailsWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  .details-body {
    position: absolute;
    top: 120px;

    background-color: ${(props) => props.theme.colors.background};
    border-radius: 8px;

    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .title {
      margin: 30px 0;
    }

    .fixed-button {
      margin: 40px 0;
      background: red;
    }

    .fixed-button-flex {
      margin: 12px 0;
      position: sticky;
      bottom: 30;
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    p {
      padding: 4px 0;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }

    .label-icon {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-right: 4px;
      }
    }
  }
`;
