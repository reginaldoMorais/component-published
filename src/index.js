import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TitleStyled = styled.h1`
  font-size: 1.4rem;
  color: ${props => props.color};
  background-color: ${props => props.background};
  padding: 0.5rem;
  border-radius: 0.8rem;
  font-family: "Roboto", Arial, sans-serif;
`;

const Comp = props => (
  <TitleStyled {...props}>
    {props.children || `Component Published!!`}
  </TitleStyled>
);

Comp.defaultProps = {
  color: "#7e00ff",
  background: "#ebdafd"
};

Comp.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string
};

export default Comp;
