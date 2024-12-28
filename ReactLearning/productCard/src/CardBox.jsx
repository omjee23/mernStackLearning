import Card from "./card";

function CardBox(){
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: '5px',
    }
    return(
       <div style={styles}>
        <Card title={"Samsung Galaxy"}idx={0}/>
        <Card title={"Lenovo ThinkPad"} idx={1}/>
        <Card title={"Samsung Galaxy Watch"}  idx={2}/>
        <Card title={"Apple Watch"} idx={3}/>
       </div>
    )
}

export default CardBox;