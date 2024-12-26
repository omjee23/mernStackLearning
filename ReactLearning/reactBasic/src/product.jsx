import '../src/Product.css'
function Product({title,Arr,Obj}){
    const arrList = Arr.map((arr)=> <li>{arr}</li>)
    return(
        <div className="product">
            <h1>Hello omji</h1>
            <h2>{title}</h2>
            <h4>{arrList}</h4>
            <p>I am a software developer !</p>
        </div>
    )
}

export default Product;