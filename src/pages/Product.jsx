import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../urls';

const Product = () => {
    let {id} = useParams()

    useEffect(() => {
        axios.get(BASE_URL + "/products/" + id)
            .then(res => console.log(res))
    }, []);

    return (
        <div>
            <h1>PRPDUCT PAGE {id}</h1>            
        </div>
    );
};

export default Product;