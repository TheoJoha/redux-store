import { useSelector } from "react-redux"
import Product from "./Product"
const BasketProduct = () => {
    const { amount, products, total } = useSelector((store) => store.basket)
    return (
        <div className="py-4 max-w-7xl mx-auto">
            {amount > 1 ? (<>
                <div>
                    {products.map((item, i) => (
                        <Product key={new Date().getTime + Math.random()}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            amount={item.amount}
                        />
                    ))}
                </div>
                <div className="flex flex-row items-center justify-evenly py-8">
                    <p className="text-2xl font-medium">Total</p>
                    <p className="text-2xl font-medium">£ {total.toFixed(2)}</p>
                    <button className="text-red-500 tracking-wide pt-1 pb-3">Remove</button>
                </div>
                <div className="flex flex-col tems-center">
                    <p className="text-lg font-medium">Amount</p>
                    <div className="flex flex-row items-center gap-4 text-gray-600
            font-medium">
                        <button className="text-xl">-</button>
                        <p>{amount}</p>
                        <button className="text-xl">+</button>
                    </div>
                </div>
            </>) : (
                <>
                    <p className="text-2xl text-gray-700
                font-medium text-center">Your basket is empty</p>
                </>
            )}
            <div className="flex flex-row items-center justify-evenly py-8">
                <p className="text-2xl font-medium">Total</p>
                <p className="text-2xl font-medium">£ {total.toFixed(2)}</p>
                <button className="text-red-500 tracking-wide pt-1 pb-3">Remove</button>
            </div>
        </div>

    )
}

export default BasketProduct