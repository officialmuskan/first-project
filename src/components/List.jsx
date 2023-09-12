
function Item({name, isPacked}){
    // if(isPacked)
    //   return <li className='item'>{name}✔ </li>
    // return <li className='item'>{name}</li>
    // return null;
  
    // return(
    //   <li className='item'>
    //     {isPacked ? (<del>name + "✔"</del>) : name }
    //   </li>
    // );
  
    return(
      <li className='item'>
          {/* when the condition is true, or render nothing otherwise. 
          if isPacked, then (&&) render the checkmark, otherwise, render nothing”*/}
         {name}{isPacked && "✔"}
       </li>
    );
  
  }
  
  export default function PackingList(){
    return(
      <section>
        <h1>Packing list</h1>
        <ul>
          <Item name={"Bag"} isPacked={true}/>
          <Item name={"Shoes"} isPacked={false}/>
          <Item name={"Clothes"} isPacked={true}/>
        </ul>
      </section>
  
    );
  }
  
  
  
  
  