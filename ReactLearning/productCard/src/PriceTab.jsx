function PriceTab({oldPrice, newPrice}){
    return(
        <>
        <div>
            <span>Old Price: {oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span>New Price: {newPrice}</span>
        </div>
        </>
    )
}

export default PriceTab;