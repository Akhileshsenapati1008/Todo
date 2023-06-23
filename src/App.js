import { useState } from "react";
import NodeList from "./NoteList";
import "./App.css";
import { useEffect } from "react";
const App=()=>
{
    const [toAddCard,setAddCard]=useState("");
    const [listCard,setListCard]=useState([]);
    useEffect(
        ()=>
        {
        const pastListCard=window.localStorage.getItem('My-Past-ListCard');
        let temp=[];
         if ( pastListCard !== null ) 
       { 
        temp=JSON.parse(pastListCard);
        }
        console.log(temp);
        setListCard([...temp]);
        },[])
        useEffect(() => {
            var temp=listCard
            window.localStorage.setItem('My-Past-ListCard', JSON.stringify(temp));
          }, [listCard]);
        //   useEffect(
        //     ()=>
        //     {
        //     const pasttoAddCard=window.localStorage.getItem('My-Past-toAddCard');
        //     if ( pasttoAddCard !== null ) 
        //     setAddCard(JSON.parse(pasttoAddCard));
        //     },[])
        //     useEffect(() => {
        //         window.localStorage.setItem('My-Past-toAddCard', JSON.stringify(toAddCard));
        //       }, [toAddCard]);
    const cardOnChange=(event)=>
    {
         setAddCard(event.target.value);
    }
    const addCardElement=()=>
    {
      setListCard(currentState=>[{content:toAddCard,doneStatus:false,id:listCard.length+1},...listCard]);
    //   console.log(listCard);
    }
    const clearingCard=()=>
    {
        setListCard([]);
    }
    return(
        <div className="appContainer">
        <h1>TODO</h1>
       <input type="text" onChange={cardOnChange}/>  
       <button onClick={addCardElement} className="roundedButtonStyling">Add</button>
       <button onClick={clearingCard} className="roundedButtonStyling">Reset</button>
       <NodeList listCard={listCard} setListCard={setListCard}></NodeList>
       </div>
    );

}
export default App;