import './Item.css'
import { useRef, useState } from 'react';


const Item = ({item, enterDiv}) => {

  const div = useRef(null)
  const [startx, setStartx] = useState(0)
  
  const handleMove = e => {
    let x = e.touches[0].clientX
    div.current.style.left = `${x - startx}px`
  }

  const handleStart = e => {
    setStartx(e.touches[0].clientX - div.current.offsetLeft)
  }
  return (
    <div ref={div} className="item" onTouchMove={handleMove} onTouchStart={handleStart}>
      <h1>{item}</h1>
    </div>
  );
};

export default Item;