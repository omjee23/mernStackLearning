import './Card.css'
import PriceTab from './PriceTab';
function Card({title,idx}){
    let oldPrice = ['20000', '150000','10000', '80000']
    let newPrice = ['18000', '140000','9000', '75000']
    let description = ["Advanced smartphones with vibrant displays","Reliable and durable professional laptops","Stylish smartwatch with fitness features","Smartwatch for health and iPhone connectivity"]
    return(
        <>
        <div className="card">
            <h2>{title}</h2>
            <p>{description[idx]}</p>
            <PriceTab oldPrice={oldPrice[idx]}  newPrice={newPrice[idx]}/>
        </div>
        </>
    )
}

export default Card;