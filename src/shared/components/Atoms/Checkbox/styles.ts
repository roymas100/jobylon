import styled from "styled-components";

export const CheckboxField = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding-left: 20px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-direction: row;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    left: 0;
    height: 14px;
    width: 14px;
    background-color: #eee;
    border-radius: 6px;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  &:hover > .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: ${(props) => props.theme.colors.primary};
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 5px;
    top: 2px;
    width: 2px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  label {
    cursor: pointer;
    font-size: 12px;
    justify-self: flex-start;
  }
`;
