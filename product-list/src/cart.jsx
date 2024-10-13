import List from "./components/list";
import Balance from "./components/balance";
import { useState } from "react";
import data  from "../data.json";
import Confirmation from "./components/confirmation";

const Cart = () =>{
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.name === product.name);
            if(existingItem){
                return prevItems.map(item => 
                    item.name === product.name ? {...item, quantity: item.quantity + 1} : item
                );
            } else {
                return [...prevItems, {...product, quantity: 1, image: product.image}];
            }
        });
    };

    const removeFromCart = (name) => {
        setCartItems(prevItems => prevItems.filter(item => item.name !== name));
    }

    const incrementQuantity = (name) => {
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.name === name ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
    
      const decrementQuantity = (name) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.name === name);
            if (existingItem && existingItem.quantity > 1) {
                return prevItems.map(item =>
                    item.name === name ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                return prevItems.filter(item => item.name !== name); 
            }
        });
    };

      const confirmOrder = () => {
        setIsModalOpen(true);
      };
    
      const startNewOrder = () => {
        setCartItems([]); 
        setIsModalOpen(false); 
      };

    return(
        <main className="bg-RoseL-50 font-RedHatText h-full flex justify-center">
            <section className="mobile:p-[20px] min-h-screen desktop:pl-[110px] desktop:pr-[110px] desktop:pt-[90px] desktop:pb-[90px] laptop:mt-[55px] tablet:mt-[40px] desktop:mt-0">
                <h1 className="text-RoseL-900 leading-none mb-[40px] text-[40px] font-bold">Desserts</h1>
                <div className="desktop:flex desktop:justify-between laptop:flex laptop:justify-between laptop:gap-6 desktop:gap-[40px]">
                <List 
                    items={data.slice(0,9)}
                    addToCart={addToCart}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    cartItems={cartItems} 
                />
                <Balance 
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    confirmOrder={confirmOrder}
                />
                </div>
            </section>

            {isModalOpen && (
                <>
                <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
                
                <div className="fixed inset-0 flex justify-center items-center z-20">
                    <Confirmation cartItems={cartItems} startNewOrder={startNewOrder}/>
                </div>
                </>
            )}
        </main>
    )
}

export default Cart