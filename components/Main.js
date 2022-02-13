import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

function Main({ address, sanityTokens, thirdWebTokens }) {
  return (
    <Wrapper>
      <Portfolio
        address={address}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
      <Promos />
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 100px);
  overflow: hidden;
  overflow-y: scroll;

  ::webkit-scrollbar {
    display:none;
  }



  & div {
    border-radius: 0.4rem;
  }
`;
