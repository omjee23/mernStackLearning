import Product from "./product";

function ProductTab(){
    let arr1 = ["om", "ram", "shayam"]
    let obj1 = {a:'1', b:'2', c:'3'}
    return(
        <>
        <Product title="Laptop" Arr={arr1}/>
        {/* <Product title = "Phone" Obj={obj1}/>
        <Product title = "Pen"/> */}
        </>
    ) 
}
export default ProductTab;