import React from "react";
import PropTypes from "prop-types";
import { HeaderWrap, HeaderTitle } from "./HeaderElements";
const Header = ({ title }) => {
  return (
    <>
      <HeaderWrap>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderWrap>
    </>
  );
};

Header.defaultProps = {
  title: "Weather App React",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
