import './Item.css'
import { useRef } from 'react';


const Item = ({item, enterDiv}) => {

  const div = useRef(null)
  // let rect = div.current.getBoundingClientRect()
  // enterDiv(rect)

  return (
    <div ref={div} className="item">
      <h1>{item}</h1>
    </div>
  );
};

export default Item;