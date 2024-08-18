import React, { Fragment, useState } from 'react'
import productCategory from "../json/ProductsByCategory.json"
import categorys from "../json/products-categorys.json"
import ProductCard from '../snippets/ProductCard'

const ProductsByCategory = () => {
    const [category, setCategory] = useState("Watches")
    return (
        <>
            <section className='all-sections'>
                <div className='container'>
                    <div className='product-head'>
                        <h2>Shop products by category</h2>
                    </div>
                    <div className='categorys-btn-container'>
                        {categorys.map((c, index) => (
                            <button
                                onClick={() => { setCategory(c.name)}} key={index}
                                className={`categorys-btn ${category === c.name ? 'selected' : ''}`}
                            >{c.name}</button>
                        ))}
                    </div>
                    <div className='Products-By-Category-section'>
                        {productCategory[category].map((p, index) => (
                            <Fragment key={index}>

                                <ProductCard
                                    img={p.img}
                                    name={p.name}
                                    price={p.price}
                                    ratting={p.ratting}
                                    new={p.new}

                                />
                            </Fragment>

                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}

export default ProductsByCategory
