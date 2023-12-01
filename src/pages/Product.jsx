import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../urls';

const Product = () => {
    let {id} = useParams()
const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get(BASE_URL + "/products/" + id)
            .then(res => res.json())
            .then(res => setProducts([...products, res]))
    }, []);

    return (
        <div>
            <h1>PRPDUCT PAGE {id}</h1>            
        </div>
    );
};

export default Product;