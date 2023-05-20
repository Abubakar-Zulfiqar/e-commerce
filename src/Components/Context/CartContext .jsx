import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const addItem = (item) => {
        setItems([...items, item])
    }

    const removeItem = (itemId) => {
        setItems(items.filter((item) => item.id !== itemId))
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
