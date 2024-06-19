import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize,setWindowSize] = useState ({
        width: undefined,
        height: undefined
    });

    useEffect (()=>{
       const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
         });
       }

       handleResize();

       window.addEventListener('Resize', handleResize);

       return () =>  window.removeEventListener('Resize', handleResize);
    
    },[])
    return windowSize;
}

export default useWindowSize;