import CardComponent from "./CardCompanent";
const NodeList=({listCard,setListCard})=>
{
    return(
<div>
{listCard.map((ele)=>{return <CardComponent listCard={listCard} setListCard={setListCard}  element={ele} key={ele.id}></CardComponent>})}
</div>
    );
}
export default NodeList;