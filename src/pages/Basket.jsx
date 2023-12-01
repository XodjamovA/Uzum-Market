import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../urls';

export default function Basket() {

    const [saveds, setSaveds] = useState([])

    useEffect(() => {
        const ids = JSON.parse(localStorage.getItem('cart')) || []

        for (let id of ids) {
            fetch(BASE_URL + "/products/" + id)
                .then(res => res.json())
                .then(res => setSaveds([...saveds, res]))
        }
    }, []);

    return (
        <div className="container container_2">
            {saveds.length > 0 ? (
                <div className="div_grid container grid grid-cols-5 w-full gap-10">
                    {saveds.map((item) => (
                        <ProductItem key={item.id} {...item} />
                    ))}
                </div>
            ) : (
                <>
                    <img className='w-[150px]' src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="" />
                    <h4>В корзине пока нет товаров</h4>
                    <h5>Начните с подборок на главной странице или найдите нужный товар через поиск</h5>
                    <Link to="/" >
                        <button>На главную</button>
                    </Link>

                </>
            )
            }
        </div>
    )
}