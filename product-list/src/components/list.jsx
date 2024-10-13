/* eslint-disable react/prop-types */
import Card from "./card";

const List =({items, addToCart, incrementQuantity, decrementQuantity, cartItems}) => {

    return(
        <section className="flex justify-center flex-row">
            <div className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-center desktop:grid desktop:grid-cols-3 desktop:gap-x-[22px] dektop-2:grid dektop-2:grid-cols-4 dektop-3:grid dektop-3:grid-cols-5 dektop-4:grid dektop-4:grid-cols-6 dektop-5:grid dektop-5:grid-cols-7 tablet:grid tablet:grid-cols-2 tablet:gap-x-[25px]">
                {items.map((item) => {
                    const inCart = cartItems.find(cartItem => cartItem.name === item.name);
                    return (
                    <Card
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        category={item.category}
                        price={item.price}
                        addToCart={addToCart}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        quantity={inCart ? inCart.quantity : 0}
                        inCart={!!inCart}
                    />
                );
                })}

            </div>
        </section>
    )
}

export default List;