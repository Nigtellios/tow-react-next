import React from "react";
import styled from "styled-components";
import rem from "../../Global/utils/PxToRem";
import media from "../../Global/utils/MediaQueries";
import colors from "../../Global/styles/Colors";
import transitions from "../../Global/styles/Transitions";

function Header( { logotype, logotypeAlt }: { logotype: string, logotypeAlt: string } ) {
  return (
    <HeaderWrapper>
      <Logotype>
        <img src={ logotype } alt={ logotypeAlt } loading={`lazy`}/>
      </Logotype>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: ${rem(15)};
  position: relative;

  ${media.min('lg')} {
    padding: ${rem(25)};
  }
  
  &:before {
    content: '';
    bottom: 0;
    left: 0;
    position: absolute;
    height: ${ rem(3) };
    width: 0;
    background: ${ colors.dark };
	  transition: ${ transitions.long };
  }

  &:hover:before {
    width: 100%;
  }
`;

const Logotype = styled.div`
  display: block;
  
  img {
    width: 100%;
    max-width: ${ rem(105) };
  }
`;

export default Header;