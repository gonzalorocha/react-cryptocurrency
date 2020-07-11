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
const useCurrency = (label, initialState, options) => {
    const [state, updateState] = useState(initialState); 

    const SelectCurrency = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectSt
                onChange={(e) => updateState(e.target.value)}
                value={state}
            >
                <option value=''>Choose one-</option>
                {options.map((op) => (
                    <option key={op.code} value={op.code}>{op.name}</option>
                ))}
            </SelectSt>
        </Fragment>
    )

    //Return state, interface and function that modify the state
    return [state, SelectCurrency, updateState];
}

export default useCurrency;