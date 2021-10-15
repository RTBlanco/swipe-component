import Item from "./Item";
import './Items.css'
import { useState, useRef, useEffect } from "react";
import Slider from 'react-touch-drag-slider'
import SwipeableViews from 'react-swipeable-views';


const Items = () => {

  // const [offsets, setOffsets] = useState([])
  const [test, setTest] = useState(0)
  const [nums, setNums] = useState([1,2,3,4,5,6,7,8,9,10])
  const [edge, setEdge] = useState(false);
  const items = useRef(null)
  const container = useRef(null)

  // useEffect(() => {
  //   getOffsets()
  // },[])

  const [startx, setStartx] = useState('');

  // const getOffsets = () => {
  //   // console.log(items)
  //   if (items.current) {
  //     let children = [...items.current.children]
  //     console.log(children)
  //     let offs = children.map(child => {
  //       return child.offsetLeft - (child.offsetLeft * 2)
  //     })
  //     console.log(offs)
  //     setOffsets(offs)
  //   }
  // }

  const renderItems = () => {
    return nums.map((num, i) => <Item item={num} key={i} />)
  }

  const handleMove = e => {
    let x = e.touches[0].clientX
    items.current.style.left = `${x - startx}px`

    let outer = container.current.getBoundingClientRect()
    let inner = items.current.getBoundingClientRect()
    
    // console.log(x)
    // console.log(startx)

    // if () {

    // }
    
    
    if (parseInt(items.current.style.left) > 0 ) {
      console.log("at the beginning")
      items.current.style.left = `0px`
    } else if (inner.right < outer.right) {

      items.current.style.left = `-${inner.width - outer.width}px`
    }

    // } else if (  ((test/ window.innerWidth) + -1) == `-${nums.length }`  ) {
    //   console.log("at the end")
    //   items.current.style.transform = `translateX(${test - parseInt(items.current.style.left)}px)`
    //   // items.current.style.transition = `transform .1s ease-in-out`
    // }
  }

  const handleStart = e => {
    setStartx(e.touches[0].clientX - items.current.offsetLeft)
  }

  const handleEnd = e => {
    // if touch end at -100px transition to -365px and so on
    // items.current.style.left = '0px'
    
    let touchEnd = e.changedTouches[0].clientX
    let outer = container.current.getBoundingClientRect()
    let inner = items.current.getBoundingClientRect()



    console.log(e.target.offsetLeft)
    
    // if (e.target.clientLeft == e.target.clientLeft - 100) {
    // if (startx > touchEnd) {
    //   swipeLeft() 
    //   console.log('swipe left')
    // } else if (startx < touchEnd) {
    //   swipeRight()
    //   console.log('swipe right')
    // }

    // console.log("start =>", startx)
    // console.log("end =>",touchEnd)
    // console.log("math =>",startx - touchEnd)
    

    // if ((inner.right  < (outer.right + 371))) {
    //   // setTest(`-${inner.width - outer.width}`)
    // } else if (startx > touchEnd) {
    //   swipeLeft()
    // } else if (startx < touchEnd) {
    //   swipeRight()
    // }


    // console.log("test ->",test)
    // console.log('inner => ', inner)
    // console.log('outer => ', outer)
    // console.log("added 371 =>", outer.right + 371)
  }

  const swipeLeft = () => {
    // console.log(window.innerWidth)
    let outer = container.current.getBoundingClientRect()
    let inner = items.current.getBoundingClientRect()

    
    if (  ((test/ window.innerWidth) + -1) != `-${nums.length}`  ) {
      setTest(prev => {
        // since setting state is async 
        // i need to change state first then animate
        let newState = prev + -window.innerWidth 
        items.current.style.transform = `translateX(${newState - parseInt(items.current.style.left)}px)`
        items.current.style.transition = `transform .5s ease-in-out`
        // items.current.style.left = newState - parseInt(items.current.style.left)
        return newState
      })
    } 
    
    // console.log("math => ", (test/ window.innerWidth) + -1)
    // console.log('lenth of number => ', nums.length)
  }

  const swipeRight = () => {
    let outer = container.current.getBoundingClientRect()
    let inner = items.current.getBoundingClientRect()

    if (test !== 0) {
      setTest(prev => {
        let newState = prev - -window.innerWidth
        console.log('swipe right state', newState)
        items.current.style.transform = `translateX(npm${newState - parseInt(items.current.style.left)}px)`
        items.current.style.transition = `transform .5s ease-in-out`
        return newState
      })

    }
  }


  return (
    <div ref={container} id="items-container">
      <div ref={items} id="inner" onTouchMove={handleMove}  onTouchStart={handleStart} onTouchEnd={handleEnd}>
        {renderItems()}
      </div>
    </div>
  );
  // return (
  //   <div ref={container} id="items-container">
  //     <div ref={items} id="inner" >
  //       <SwipeableViews>
  //         {renderItems()}
  //       </SwipeableViews>
  //     </div>
  //   </div>
  // );
};

export default Items;