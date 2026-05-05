import { useState } from 'react'
import VideoSection from './VideoSection';
import { WiSnow } from 'react-icons/wi';
const Hero = () => {
  const [Link, setLink] = useState("");
  const [CountNum, setNumber] = useState();
  const [Data, setData] = useState({links:"",screens:0});

  function handleSubmit(e) {
    if(Link === "" || CountNum === 0 || isNaN(CountNum) || CountNum < 0){
        alert("Please enter a valid link and number of screens");
        setLink("");
        setNumber();
        return;
    }else{
    e.preventDefault();
    setLink("");
    setNumber();
    setData({links:Link,screens:CountNum});
    }}

  return (
    <div>
      
      <div className='center p-3 flex flex-col gap-4' style={{ width: '80%', margin: '0 auto' }}>
        <h2 className='text-center font-medium '>Youtube Multiple Video Player </h2>
        <input className='py-3 px-5 m-5 border-blue-600' type="text"
        placeholder='Enter link : '
         value={Link}
         onChange={(e) => setLink(e.target.value)} />
    
        <input
        className='py-3 px-5 m-5 border-blue-600 rounded' 
        type="number"
        placeholder='Enter Number of Screens :'
        onChange={(e) => setNumber(parseInt(e.target.value))}
        value={isNaN(CountNum) ? "" : CountNum}
        />
        <button 
        className='bg-blue-600 text-white py-3 px-5 rounded-xl'
        onClick={(e)=>{
            handleSubmit(e);
        }
        }
        >Submit</button>
    </div>
        <VideoSection Link={Data.links} CountNum={Data.screens} />
    </div>
  )
}

export default Hero