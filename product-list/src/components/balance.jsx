/* eslint-disable react/prop-types */
import empty from "../assets/images/illustration-empty-cart.svg";
import remove from "../assets/images/icon-remove-item.svg";
import carbon from "../assets/images/icon-carbon-neutral.svg"

const Balance = ({ cartItems, removeFromCart, confirmOrder }) => {
  const totalOrder = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="mobile:w-full mobile:h-full bg-white pl-[25px] pr-[25px] pb-[25px] pt-[30px] rounded-lg desktop:w-[385px] desktop:mt-[-80px] tablet:w-[325px] tablet:mt-[-80px]">
      <h2 className="font-bold text-Red-base text-[22px] leading-none mb-[10px]">
        Your Cart ({cartItems.length})
      </h2>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={empty} alt="empty" className="mt-[40px] mb-[20px]" />
          <p className="text-[14px] font-semibold text-RoseL-900">Your added items will appear here</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.name} className="flex justify-between items-center h-[80px] border-b-2 border-RoseL-100">
              <div className="flex flex-col gap-y-[12px]">
                <h3 className="font-bold text-[16px] text-RoseL-900 leading-none">{item.name}</h3>
                <p className="text-[16px] text-RoseL-400">
                  <span className="text-Red-base font-bold mr-[16px] leading-none">{item.quantity}x</span> <span className="font-normal mr-[7px] text-[16px] leading-none">@ ${item.price.toFixed(2)}</span> <span className="font-semibold text-[16px] leading-none">${(item.quantity * item.price).toFixed(2)}</span>
                </p>
              </div>
              <button onClick={() => removeFromCart(item.name)} className=" border border-rose-950 w-[18px] h-[18px] rounded-full flex justify-center items-center">
                <img src={remove} alt="remove" />
              </button>
            </div>
          ))}
          <div className=" text-RoseL-900 h-[90px] flex justify-between items-center">
            <span className="font-semibold">Order Total</span> <span className="font-bold text-[20px]">${totalOrder.toFixed(2)}</span>
          </div>
          <div className="w-full h-[50px] bg-RoseL-50 flex items-center justify-center  text-[14px] mb-[25px]">
            <img src={carbon} alt="carbon" className="mr-[8px]"/> 
            <span>This is a<span className="font-bold mr-[4px] ml-[4px]">carbon-neutral</span>delivery</span>
          </div>
          <button className="w-full h-[50px] bg-Red-base rounded-full text-white font-semiBold hover:bg-RoseL-950" onClick={confirmOrder}>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Balance;
