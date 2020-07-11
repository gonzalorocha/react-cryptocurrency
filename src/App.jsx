import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form';
import Quote from './components/Quote';
import Spinner from './components/Spinner';

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Image = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const Heding = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;
    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
    }
`

const App = () => {
    const [currency, saveCurrency] = useState('');
    const [cryptocurrency, saveCryptocurrency] = useState('');
    const [result, setResult] = useState({});
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (currency==='' || cryptocurrency==='') {
            return;
        }
        setLoad(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
        const getQuote = async() => {
            const res = await axios.get(url);
            if (res.status === 200){
                setTimeout(() => {
                    setResult(res.data.DISPLAY[cryptocurrency][currency]);
                    setLoad(false)
                },3000)
            }

        }
        getQuote();
    }, [currency, cryptocurrency]);

    const resultComponent = (load) ? <Spinner /> : <Quote result={result}/>

    return (
        <Container>
            <div>
                <Image 
                    src={image}
                    alt="image cryp"
                />
            </div>
            <div>
                <Heding>
                    Quote cryptocurrency
                </Heding>
                <Form 
                    saveCryptocurrency={saveCryptocurrency}
                    saveCurrency={saveCurrency}
                />
                {resultComponent}
            </div>
        </Container>
    );
}

export default App;
