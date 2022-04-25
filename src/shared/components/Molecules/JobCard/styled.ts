import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  margin-bottom: 12px;

  display: flex;
  flex-direction: row;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 6px;

  transition: 0.2s border-color;

  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  .avatar-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }

  .info-container {
    display: flex;
    flex-direction: column;

    p {
      justify-content: center;
      align-items: center;
    }

    flex-grow: 3;
    height: 100%;
  }

  .card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    margin-right: 12px;
  }

  .name {
    font-size: 14px;
    color: ${(props) => props.theme.colors.text2};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  .time-posted {
    color: ${(props) => props.theme.colors.text3};
    font-size: 12px;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2px;
    width: 100%;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
  }
`;
