import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseSteps = () =>{
        const newSteps = steps + 1;
        setSteps(newSteps);
    }
    useEffect (() =>{
        console.log(steps)
    },[]);
    return (
        <div>
            <h2>This is my Smart watch</h2>
            <h3>Current steps : {steps}</h3>
            <button onClick={increaseSteps}>Run.....</button>
        </div>
    );
};

export default Watch; 