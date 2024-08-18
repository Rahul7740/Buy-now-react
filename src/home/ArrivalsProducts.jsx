import React from 'react'
import "../style/arrival-and-promotion.css"
import SvgPath from '../assets/svg/SvgPath'
import arrivalImg from "../json/arrivalProducts.json"
import AllButtons  from "../snippets/AllButtons"

const ArrivalsProducts = () => {
    return (
        <>
            <section className='all-sections'>
                <div className='container'>
                    <div className='product-head'>
                        <h2>New arrivals products</h2>
                        <div>
                            <button><img src={SvgPath.arrowBack} alt='back' /></button>
                            <img src={SvgPath.horizontalLine31px} alt="horizontal-line" />
                            <button><img src={SvgPath.arrowForword} alt='forword' /></button>
                        </div>
                    </div>
                    <div className='arrivals-products-cards'>
                        <div className='arrival-card'>
                            <div className='arrival-card-imgs'>
                                {
                                    arrivalImg["1"].map((i, index) => (
                                        <img key={index} src={require(`../assets/images/${i.img}`)} alt="arrival" />
                                    ))
                                }
                            </div>
                            <div className='arrival-card-content'>
                                <h3>Gaming products</h3>
                                <AllButtons name="Shop Top Collection" />

                            </div>
                        </div>
                        <div className='arrival-card'>
                            <div className='arrival-card-imgs'>
                                {
                                    arrivalImg["2"].map((i, index) => (
                                        <img key={index} src={require(`../assets/images/${i.img}`)} alt="arrival" />
                                    ))
                                }
                            </div>
                            <div className='arrival-card-content'>
                                <h3>Headphones</h3>
                                <AllButtons name="Shop Top Collection" />
                            </div>
                        </div>
                        <div className='arrival-card'>
                            <div className='arrival-card-imgs'>
                                {
                                    arrivalImg["1"].map((i, index) => (
                                        <img key={index} src={require(`../assets/images/${i.img}`)} alt="arrival" />
                                    ))
                                }
                            </div>
                            <div className='arrival-card-content'>
                                <h3>Gaming products</h3>
                                <AllButtons name="Shop Top Collection" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArrivalsProducts
