import { createContext, useEffect, useState } from "react";
import { memberships, products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { models, photos, events } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()
    const membershipIds = ["0001", "0002", "0003"]; 

    const addToCart = async (itemId, format = null) => {
        if (requiresFormat(itemId) && !format) {
            toast.error('Select photo format');
            return;
        }
    
        let cartData = structuredClone(cartItems);
    
        if (membershipIds.includes(itemId)) {
            if (cartData[itemId]) {
                toast.info("This membership is already in your cart.");
                return;
            }
            for (const id of membershipIds) {
                if (cartData[id]) {
                    delete cartData[id];
                }
            }
            toast.success("Membership successfully added to cart");
        }
    
        if (cartData[itemId]) {
            if (format) {
                if (cartData[itemId][format]) {
                    cartData[itemId][format] += 1;
                } else {
                    cartData[itemId][format] = 1;
                }
            } else {
                cartData[itemId] += 1;
            }
        } else {
            if (format) {
                cartData[itemId] = { [format]: 1 };
            } else {
                cartData[itemId] = 1;
            }
        }
    
        setCartItems(cartData);
    };
    
    const requiresFormat = (itemId) => {
        const photo = photos.find(product => product._id === itemId);
        return photo && photo.format; 
    };
    
    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    
    const getCartCount = () => {
        let totalCount = 0;
    
        for (const itemId in cartItems) {
            const item = cartItems[itemId];
    
            if (typeof item === 'number') {
                totalCount += item;
            } else if (typeof item === 'object') {
                for (const format in item) {
                    try {
                        if (item[format] > 0) {
                            totalCount += item[format];
                        }
                    } catch (error) {
                        console.error(`Error counting format: ${format}`, error);
                    }
                }
            }
        }
    
        return totalCount;
    };
    
    const updateQuantity = async (itemId, quantity, format = null) => {
        let cartData = structuredClone(cartItems);
      
        if (format) {
            if (cartData[itemId] && typeof cartData[itemId] === 'object') {
                cartData[itemId][format] = quantity;
            }
        } else {
            cartData[itemId] = quantity;
        }
      
        if (quantity <= 0) {
            if (format && cartData[itemId][format] !== undefined) {
                delete cartData[itemId][format];
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            } else if (!format) {
                delete cartData[itemId];
            }
        }
      
        setCartItems(cartData);
    };
    
    const getCartAmount = () => {
        let totalAmount = 0;
    
        for (const itemId in cartItems) {
            const itemInfo = products.find(product => product._id === itemId);
            const photoInfo = photos.find(photo => photo._id === itemId);
            const membershipInfo = memberships.find(membership => membership._id === itemId)
            const item = cartItems[itemId];
    
            try {
                if (typeof item === 'number') {
                    if (itemInfo) {
                        totalAmount += itemInfo.price * item;
                    }
                    if (membershipInfo) {
                        totalAmount += membershipInfo.price * item
                    }
                } else if (typeof item === 'object') {
                    if (photoInfo) {
                        const photoPrice = photoInfo.price;
                        for (const format in item) {
                            totalAmount += photoPrice * item[format];
                        }
                    }
                }
            } catch (error) {
                console.error(`Error calculating total amount for item ID: ${itemId}`, error);
            }
        }
    
        return totalAmount;
    };
    
    const value = {
        products , currency , delivery_fee,
        search, setSearch, showSearch,setShowSearch,
        cartItems, addToCart, getCartCount,
        updateQuantity, getCartAmount,
        navigate, models, photos, events,requiresFormat,
        memberships
    }
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
