import Item from "./Item";
import './Items.css'
import { useState, useRef, useEffect } from "react";
import Slider from 'react-touch-drag-slider'
import SwipeableViews from 'react-swipeable-views';


const Items = () => {
  const [nums, setNums] = useState([1,2,3,4,5,6,7,8,9,10])

  const renderItems = () => {
    return nums.map((num, i) => <Item  item={num} key={i} />)
  }

  
  return (
    <div id="items-container">
      <div id="inner" >
        {renderItems()}
      </div>
    </div>
  );
};

export default Items;