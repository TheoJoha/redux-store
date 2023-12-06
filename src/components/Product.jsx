
const Product = ({ name, price, image, amount }) => {
    return (
        <div clasName="flex flex-row items-center gap-8
        px-10">
            <img src={image} alt={name + "glasses"} className="w-40"/>
            <div className="w-1/2 px-10">
                <p className="text-xl font-medium">{name}</p>
                <p>{price.toFixed(2)}</p>
                </div>
            <div className="flex flex-col">
                <p className="text-lg font-medium">Amount</p>
            <p>{amount}</p>
            </div>
        </div>
    )
}

export default Product