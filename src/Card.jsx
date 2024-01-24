import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'

function Card({ product, onAddToCart, onRemoveFromCart }) {
    return (
        <div class="col-lg-3">
            <div class="card text-center" style={{ width: "18rem" }}>
                <div class="badge bg-warning text-black position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{product.stock}</div>
                <img src={product.img} class="card-img-top" alt="ASUS [SmartChoice] Vivobook 16X (2022), 16.0-inch (40.64 cms) FHD+ 16:10, AMD Ryzen 5 5600H, Thin and Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Silver/1.80 kg), M1603QA-MB501WS" />
                <div class="card-body ">
                    <h5 class="card-title">{product.title}</h5>
                    <h6 class="price"><FontAwesomeIcon icon={faIndianRupeeSign} /> {product.rupee} <span class="strike"> {product.strike}</span></h6>

                    <p class="card-text">{product.description}</p>
                    {
                        product.isClicked ? <button class="btn btn-danger" onClick={() => onRemoveFromCart(product)}>Remove from Cart</button> : <button class="btn btn-primary" onClick={() => onAddToCart(product)}>Add to Cart</button>
                    }
                </div>
            </div><br></br>
        </div>
    )
}

export default Card