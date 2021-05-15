import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function CustomButton(props) {
  const StyledButton = styled(Button)`
    background: ${props.background};
    border: 3px solid ${props.border};
    border-radius: 15;
    color: ${props.color};
    font-family: 'Montserrat';
    font-size: 16px;
    width: ${props.width};
    margin-top: 15px;
    margin-bottom: 15px;
    &:hover {
      background: ${props.backgroundHover};
      border: 3px solid ${props.colorHover};
      color: ${props.colorHover};
      cursor: pointer;
    }
  `;

  return (
    <StyledButton>
      {props.content}
    </StyledButton>
  );
}

export default CustomButton;
