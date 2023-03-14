import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import Input from './components/input';
import Modal from './components/Modal';

function App() {

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const submitRef = useRef(null);
    
    const [submit, setSubmit] = useState(false);

    useEffect(()=>{
        firstNameRef.current.focus();
    },[])

    function firstKeyDown(e){
        if(e.key === "Enter")
        lastNameRef.current.focus();
    }

    function lastKeyDown(e){
        if(e.key === "Enter")
        submitRef.current.focus();
    }

    function submitKeyDown(e){
        setSubmit(true)
    }

  return (
    <div className="App">
        <header className="App-header">
            <Input 
                ref={firstNameRef}
                type="text"
                placeholder='Enter first name'
                onKeyDown={firstKeyDown}
            />
            <Input 
                ref={lastNameRef}
                type="text"
                placeholder='Enter first name'
                onKeyDown={lastKeyDown}
            />
            <button 
                ref={submitRef} 
                onKeyDown={submitKeyDown} 
                onClick={() => setSubmit(true)}>Submit</button>
            
            <Modal 
                isOpen={submit}
                onClose={() => setSubmit(false)}>Form Created</Modal>

        </header>
        
    </div>
  );
}

export default App;
