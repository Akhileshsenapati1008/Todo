const CardComponent=({listCard,setListCard,element})=>
{

const changeOrder=()=>
{
var temp=listCard;
if(!element.doneStatus)
{
  for(var deletionIndex=0;deletionIndex<temp.length;deletionIndex++)
  {
    if(temp[deletionIndex]===element)
    {
        temp.splice(deletionIndex,1);
        element.doneStatus=true;
        let insertionIndex=deletionIndex;
        let check=false;
        while(insertionIndex<temp.length)
        {
            if(temp[insertionIndex].doneStatus===true)
            {
              temp.splice(insertionIndex,0,element);
              check=true;
              break;
            }
            insertionIndex++;
        }
        if(check===false)
        {
            temp=[...temp,element];
        }
        break;
    }
  }
}
console.log(temp);
setListCard([...temp]);
}
    return(
<div>
 <button onClick={changeOrder} className={element.doneStatus?"doneStatusTrue":"doneStatusFalse"}>{element.content}</button>
</div>
    );
}
export default CardComponent;