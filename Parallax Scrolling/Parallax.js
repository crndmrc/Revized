import React ,{useState,useEffect} from 'react'

export default function Parallax() {
    const [offsetY,setOffsetY]=useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    useEffect(() => {
    window.addEventListener("scroll",handleScroll);
    return () => {
        window.removeEventListener("scroll",handleScroll);
    }
    },[]);
    return (
        <div>
            
        </div>
    )
}
