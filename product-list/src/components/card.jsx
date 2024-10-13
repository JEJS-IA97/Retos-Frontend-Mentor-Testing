/* eslint-disable react/prop-types */
import add from ".././assets/images/icon-add-to-cart.svg"
import increment from "../assets/images/icon-increment-quantity.svg"
import decrement from "../assets/images/icon-decrement-quantity.svg"

const Card = ({ image, name, category, price, addToCart, incrementQuantity, decrementQuantity, quantity, inCart }) => {

  const handleAddToCart = () => {
    addToCart({name, price, image});
  }

  const handleIncrement = () => {
    incrementQuantity(name)
  }

  const handleDecrement = () => {
    decrementQuantity(name); 
};

    return (
      <div className="flex flex-col mb-[25px]">
       <div className={`overflow-hidden rounded-lg flex items-center tablet:w-[250px] tablet:h-[240px] mobile:w-[335px] ${quantity >0 ? 'shadow-[0_0_0_2px_rgba(199,57,14,1)]' : ''}`}> 
       <picture>
         <source srcSet={image.desktop} media="(min-width: 1440px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <source srcSet={image.mobile} media="(min-width: 375px)" />
          <source srcSet={image.thumbnail} media="(min-width: 30px)" />
         <img src={image.mobile} alt={name} />
        </picture>
        </div>
        <div className="w-full flex items-center justify-center mt-[-22px]">
        {!inCart ? (
          <button 
            onClick={handleAddToCart} 
            className="h-[45px] w-[160px] border flex justify-center items-center gap-2 border-RoseL-900 rounded-full bg-white cursor-pointer font-semibold text-RoseL-900 hover:border-Red-base">
            <img src={add} alt="Add" className="h-[20px] w-[20px]" />
            Add to Cart
          </button>
        ) : (
          <div className="h-[45px] w-[160px] flex justify-center items-center gap-[34px] rounded-full bg-Red-base cursor-pointer font-semibold ">
            <div className="w-5 h-5 border rounded-full border-white flex justify-center items-center">
            <button 
              onClick={handleDecrement} 
              className="h-[10px] w-[10px] flex justify-center items-center bg-Red-base rounded-full">
              <img src={decrement} alt="Decrement" className="h-[20px] w-[20px]" />
            </button>

            </div>
            <span className="w-[30px] h-[20px] flex items-center justify-center font-semibold text-[16px] text-white">{quantity}</span>

          <div className="w-5 h-5 border rounded-full border-white flex justify-center items-center">
            <button 
              onClick={handleIncrement} 
              className="h-[10px] w-[10px] flex justify-center items-center bg-Red-base rounded-full">
              <img src={increment} alt="Increment" className="h-[20px] w-[20px]" />
            </button>
            </div>
          </div>
        )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[14px] leading-none mt-[15px] text-RoseL-400 font-normal">{category}</p>
          <h3 className="text-[16px] text-RoseL-900 leading-none font-semibold">{name}</h3>
          <p className="text-Red-base leading-none font-bold">${price.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  