import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../urls';

export default function Favourite() {
    const [saveds, setSaveds] = useState([]);



    return (
        <div className='container container_2'>
            {saveds.length > 0 ? (
                <div className="div_grid container grid grid-cols-5 w-full gap-10">
                    {saveds.map((item) => (
                        <ProductItem key={item.id} {...item} />
                    ))}
                </div>
            ) : (
                <>
                    <img className='w-[150px]' src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
                    <h4>Добавьте то, что понравилось</h4>
                    <h5>Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится</h5>
                    <Link to="/">
                        <button>На главную</button>
                    </Link>
                </>
            )
            }
        </div>
    )
}