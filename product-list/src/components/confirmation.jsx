/* eslint-disable react/prop-types */
import check from "../assets/images/icon-order-confirmed.svg"

const Confirmation = ({cartItems, startNewOrder}) => {
    const totalOrder = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return(
        <div className="mobile:w-[375px] mobile:h-auto bg-white mobile:p-[24px] tablet:p-[40px] tablet:w-[590px] tablet:h- desktop:h-auto mobile:rounded-xl rounded-lg mobile:fixed mobile:bottom-0 tablet:bottom-auto mobile:max-h-[600px] tablet:max-h-[690px]">
            <img src={check} alt="comfirmed" className="h-[42px] w-[42p] mb-[30px]"/>
            <h1 className="leading-none text-[42px] font-bold mb-[15px]">Order Confirmed</h1>
            <p className="leading-none mb-[30px] text-RoseL-500">We hope you enjoy your food!</p>
            <div className="bg-RoseL-100 mb-[30px] rounded-lg mobile:max-h-[250px] tablet:max-h-[300px] overflow-y-auto">
                <div className="p-[25px] w-full pb-0 pt-[10px]">
                    {cartItems.map((item) => (
                    <div key={item.name} className="flex justify-between items-center h-[80px] border-b-2 border-RoseL-200 ">
                    <div className="flex items-center rounded-lg">
                    <img src={item.image.thumbnail} alt={item.name} className="w-[48px] h-[48px] mr-[15px] rounded-sm" />
                    <div>
                    <h3 className="font-bold text-[16px]">{item.name}</h3>
                    <p className="text-[14px] text-RoseL-400"><span className="font-bold text-Red-base mr-[16px]">{item.quantity} x</span> @ <span className="font-semibold">${item.price.toFixed(2)}</span></p>
                     </div>
                </div>
            <span className="font-bold text-RoseL-900" >${(item.quantity * item.price).toFixed(2)}</span>
          </div>
        ))}
        <div className=" text-RoseL-900 h-[80px] flex justify-between items-center">
            <span className="font-semibold">Order Total</span> <span className="font-bold text-[20px]">${totalOrder.toFixed(2)}</span>
          </div>
                </div>
            </div>
            <button onClick={startNewOrder} className="w-full rounded-full h-[50px] bg-Red-base text-white font-semibold leading-none">Start New Order</button>
        </div>
    )
}

export default Confirmation;