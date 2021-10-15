import Item from "./Item";
import './Items.css'
import { useState, useRef, useEffect } from "react";
import Slider from 'react-touch-drag-slider'
import SwipeableViews from 'react-swipeable-views';


const Items = () => {
  const [nums, setNums] = useState([1,2,3,4,5,6,7,8,9,10])
  const [current, setCurrent] = useState(0);
  const length = nums.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  // const renderItems = () => {
  //   return nums.map((num, i) => <Item  item={num} key={i} />)
  // }

  // let items = renderItems()

  
  // return (
  //   <div id='items-container'>
  //     <div id='inner'>
  //       {nums.map((slide, index) => {
  //         return (
  //           <div>
  //             {index === current && (
  //               <Item  item={num} key={i} />
  //             )}  
  //           <div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // )

  return (
    <>
      <div id='items-container'>
        <div id='inner'>
          {nums.map((slide, index) => {
            return (
              <div key={index}>
                {index === current && (
                  <Item  item={slide} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <button onTouchStart={prevSlide}>left</button>
      <button onTouchStart={nextSlide}>right</button>
    </>
  );
}

export default Items;