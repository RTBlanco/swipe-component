import Item from "./Item";
import './Items.css'
import { useState, useRef, useEffect } from "react";
import Slider from 'react-touch-drag-slider'
import SwipeableViews from 'react-swipeable-views';


const Items = () => {
  
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10])
  const [startX, setStartX] = useState(0)
  const inner = useRef(null)
  const outer = useRef(null)

  const handleMove = e => {
    let x = e.touches[0].clientX
    inner.current.style.left = `${x - startX}px`

    let rectInner = inner.current.getBoundingClientRect()
    let rectOuter = outer.current.getBoundingClientRect()
    

    if ((Math.floor(rectInner.width / numbers.length) / 2) < rectOuter / 2 ) {
      console.log('pass')
    }

    
  }

  const handleStart = e => {
    setStartX(e.touches[0].clientX - inner.current.offsetLeft)
  }

  const consolePrint = () => {
    let test = inner.current.getBoundingClientRect()
    let outerTest = outer.current.getBoundingClientRect()
    console.log('outer => ',outerTest)
    console.log('inner =>',test)
  }

  return (
    <>
      
      <div ref={outer} id='items-container'>
        <div ref={inner} id='inner' onTouchMove={handleMove} onTouchStart={handleStart}>
          {numbers.map((num, i) => <Item key={i} item={num}/>)}
        </div>
      </div>
      {consolePrint()}
    </>
  );
}

export default Items;