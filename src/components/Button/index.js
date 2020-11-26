import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ isGreen }) =>
    isGreen
      ? ({ theme }) => theme.colors.greendGradient
      : ({ theme }) => theme.colors.orangeGradient};
  padding: 1rem 2rem;
  border: none;
  border-radius: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 2rem;

  :focus {
    outline: 0;
  }

  ${({ theme }) => theme.media.small} {
    font-size: 1rem;
  }
`;

const Button = ({ isGreen, children }) => {
  return <StyledButton isGreen={isGreen}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isGreen: PropTypes.bool,
};

Button.defaultProps = {
  isGreen: true,
};

export default Button;
