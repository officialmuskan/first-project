
export default function Gallery(){
    const [index, setIndex] = useState(0);
    const [showmore, setshowmore] = useState(false)
    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length - 1;
  
    function handleNextClick(){
      if(hasNext)
      setIndex(index + 1);
    }
    function handlePrevClick(){
      if(hasPrev)
      setIndex(index - 1);
    }
    function handleshowClick(){
      setshowmore(!showmore)
    }
  
    let sculpture = sculptureList[index];
  
    return(
      <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Prev
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} by {sculpture.artist}</i>
      </h2>
      <p>{index+1} of {sculptureList.length}</p>
      <button onClick={handleshowClick}>
        {showmore ? 'Hide' : 'Show'} details
      </button>
      {showmore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt="" />
      
      </>
  
    );
  
  }
  
  
  
  
  