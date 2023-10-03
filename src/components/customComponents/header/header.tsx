import React from 'react'

function Header() {
    return (
        <div className='w-full bg-primary-color p-5'>
            <div className='w-[90%] mx-auto flex gap-5'>
                <a className='grow' href="/">
                    <h1 className='text-[2rem] font-bold text-green-color'>Boxinator</h1>
                </a>
                <a href="">
                    <img src="./icons/cart-icon.png" alt="Cart" />
                </a>
                <a href="">
                    <img src="./icons/loginicon.svg" alt="Login" />
                </a>
            </div>
        </div>
    )
}

export default Header