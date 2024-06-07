import React from 'react';
import style from "./Products.module.css"
import product1Image from '../../assets/serum.jpg'; 
import product2Image from '../../assets/jabon.jpg'; 
import product3Image from '../../assets/jabonorganico.jpg'; 
import product4Image from '../../assets/cremabody.jpg'; 
import product5Image from '../../assets/balsamo.jpg'; 
import product6Image from '../../assets/crema.jpg'; 

const Products = () => {
    return (
        <div className={style.productsContainer}>
            <h2>Some of our products</h2>
            <div className={style.product}>
                <img src={product1Image} alt="Product 1" />
                <h3>Serum after sun</h3>
            </div>
            <div className={style.product}>
                <img src={product2Image} alt="Product 2" />
                <h3>After sun body soap</h3>
            </div>
            <div className={style.product}>
                <img src={product3Image} alt="Product 3" />
                <h3>Organic soap</h3>
            </div>
            <div className={style.product}>
                <img src={product4Image} alt="Product 1" />
                <h3>Body cream</h3>
            </div>
            <div className={style.product}>
                <img src={product5Image} alt="Product 2" />
                <h3>Lip balm</h3>
            </div>
            <div className={style.product}>
                <img src={product6Image} alt="Product 3" />
                <h3>Hand cream</h3>
            </div>
        </div>
    );
}

export default Products;