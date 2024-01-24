import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'



function Cart({ CartQuantity }) {
    return (
        <div>
            <header class="p-2 bg-white text-dark">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" class="nav-link px-2 text-dark"><FontAwesomeIcon icon={faCreditCard} /> Shopping Cart</a></li>
                        </ul>

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-end mb-md-0">
                            <li><a href="#" class="nav-link px-2 text-dark">Home</a></li>
                            <li><a href="#" class="nav-link px-2 text-dark">About</a></li>
                            <li><a href="#" class="nav-link px-2 text-dark">Gifts</a></li>
                            <li><a href="#" class="nav-link px-2 text-dark">Customer Service</a></li>
                            <li><a href="#" class="nav-link px-2 text-dark">New Releases</a></li>

                        </ul >



                        <div class="text-end">
                            <button type='button' class="btn btn-outline-dark me-5"><FontAwesomeIcon icon={faCartShopping} />Cart<span class="badge bg-dark text-white ms-1 rounded-pill">{CartQuantity}</span></button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Cart