import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import Error from './Error'
import { CURRENCIES } from '../currency';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease; 
    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Form = ({saveCurrency, saveCryptocurrency}) => {
    const [ crytocurrencyList, saveCrytocurrencyList ] = useState([]);
    const [ error, setError ] = useState(false);
    //Custom hook
    const [currency, SelectCurrency] = useCurrency('Choose your currency', '', CURRENCIES);
    const [cryptocurrency, SelectCrypto] = useCryptocurrency('Choose your cryptocurrency', '',crytocurrencyList);

    useEffect(() => {
        const getCrypto = async() => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`;   
            const result = await axios.get(url);
            if (currency && result.status === 200) {
                saveCrytocurrencyList(result.data.Data);
            } else {
                saveCrytocurrencyList([]);
            } 
        }
        getCrypto();
    }, [currency]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (currency===''|| cryptocurrency==='') {
            setError(true);
            return;
        }
        setError(false);
        saveCurrency(currency);
        saveCryptocurrency(cryptocurrency);
    }

    return ( 
        <form
            onSubmit={handleOnSubmit}
        >
            { error && (
                <Error
                    message="Complete the fields"                
                />
            )}
            <SelectCurrency/>
            <SelectCrypto/>
            <Button
                type="submit"
                value="Calculate"
            />
        </form>
     );
}
 
export default Form;