import React, {  handleSubmit, useState} from 'react';
import './components/Home.css';
import hero from './assets/hero.mp4';
const Home = () => {
  

  const Accordion = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputValue);
    };
 
   
    return (
      
      
      <div>
        <button className='button-one' onClick={handleToggle}>
          {isExpanded ? 'Cacher' : 'Comparer'}
        </button>
        {isExpanded && (
          <form onSubmit={handleSubmit}>
            <label>
              Entrez le deuxiéme site : 
            <input type="text" value={inputValue} onChange={handleInputChange} style={{ marginBottom: '10px' }}/>
            <button className='button-one' onClick={handleToggle}>
            {isExpanded ? '=>' : 'comparer'}
            </button>


            </label>
           
        
        </form>
        
        )}
      </div>
      
    );
    
  }
  
  return <div className="wrapper">
  <form onSubmit={handleSubmit}>
    <fieldset>
      <label>
        <p>Site</p>
        <input name="Site" />
      </label>
    </fieldset>
  </form>
  <div> <button className="button-one ">Analyser</button></div>
  



<div className='main'>
        <div className="overlay"></div>
        <video src={hero} autoPlay loop muted />
    </div>

    <Accordion/>
</div>


}
export default Home;