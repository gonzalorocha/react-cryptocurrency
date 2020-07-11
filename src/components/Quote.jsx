import React from 'react'
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #fff;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;

const Price = styled.p`
    font-size: 30px;
`;


const Quote = ({result}) => {
    if (Object.keys(result).length === 0) {
        return null;
    }
    console.log(result);
    return (
        <ResultDiv>
            <Price>The price is: <span>{result.PRICE}</span></Price>
            <Info>High price: <span>{result.HIGHDAY}</span></Info>
            <Info>Low price: <span>{result.LOWDAY}</span></Info>
            <Info>Varation last 24hrs: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Last update: <span>{result.LASTUPDATE}</span></Info>

        </ResultDiv>
    );

}

export default Quote;