
import React, { PureComponent } from 'react'
import ImgPath from "../assets/images/ImgPath";
import SvgPath from "../assets/svg/SvgPath";


function ProductCard(props) {

    return (

        <div className='product-card'>
            <div className='product-img'>
                <img src={require(`../assets/images/${props.img}`)} alt='product-card' />
            </div>
            <button className='product-like-btn'><p className='new'>New</p><img src={SvgPath.productLikeBTN} alt='like' /></button>
            <div className='product-content'>
                <h3>{props.name}</h3>
                {props.ratting ?
                    <div className='ratting-div'>
                        <img src={SvgPath.star} alt='star' />
                        <img src={SvgPath.star} alt='star' />
                        <img src={SvgPath.star} alt='star' />
                        <img src={SvgPath.star} alt='star' />
                        <img src={SvgPath.helfStar} alt='half-star' />
                    </div> : ""}

                <p>{props.price}</p>
                <button className='product-shop-btn'><span className='add-cart'>ADD CART</span><img className='cart-img' src={SvgPath.productShopBTN} alt="shop" /></button>
            </div>
        </div>
    )

}

export default ProductCard
