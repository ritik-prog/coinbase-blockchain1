import React, { useState } from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";

function CoinSelector({
  setSelectedToken,
  selectedToken,
  setAction,
  thirdWebTokens,
  address,
  sanityTokens,
}) {
  return (
    <Wrapper>
      <Title>Select Asset</Title>
      <CoinList>
          {sanityTokens.map((token,index)=>(
              <CoinItem key={index} token={token} sender={address} selectedToken={selectedToken} setSelectedToken={setSelectedToken} thirdWebTokens={thirdWebTokens} sanityTokens={sanityTokens} setAction={setAction} />
          ))}
      </CoinList>
    </Wrapper>
  );
}

export default CoinSelector;

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`;
