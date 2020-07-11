import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectSt = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

//Custom hook
const useCryptocurrency = (label, initialState, options) => {
    const [state, updateState] = useState(initialState); 
    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectSt
                onChange={(e) => updateState(e.target.value)}
                value={state}
            >
                <option value=''>Choose one-</option>
                {options.map((op) => (
                    <option key={op.CoinInfo.Id} value={op.CoinInfo.Name}>{op.CoinInfo.FullName}</option>
                ))}
            </SelectSt>
        </Fragment>
    )

    //Return state, interface and function that modify the state
    return [state, SelectCrypto, updateState];
}

export default useCryptocurrency;