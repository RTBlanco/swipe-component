import Item from "./Item";
import './Items.css'
import { useState, useRef } from "react";

const Items = () => {

  const [test, setTest] = useState(0)
  const [nums, setNums] = useState([1,2,3,4,5,6,7,8,9,10])
  const [edge, setEdge] = useState(false);
  const items = useRef(null)
  const container = useRef(null)

  const [startx, setStartx] = useState('');

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
    
    
    if (parseInt(items.current.style.left) > 0 ) {
      console.log("at the beginning")
      items.current.style.left = `0px`
      // items.current.style.transform = `translateX(${test - parseInt(items.current.style.left)}px)`
      // items.current.style.transition = `transform .1s ease-in-out`
    } else if (  ((test/ window.innerWidth) + -1) == `-${nums.length }`  ) {
      console.log("at the end")
      items.current.style.transform = `translateX(${test - parseInt(items.current.style.left)}px)`
      // items.current.style.transition = `transform .1s ease-in-out`
    }
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



    

    if (startx > touchEnd) {
      swipeLeft()
    } else if (startx < touchEnd) {
      swipeRight()
    }

    console.log("start =>", startx)
    console.log("end =>",touchEnd)
    console.log("math =>",startx - touchEnd)
    

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
        items.current.style.transform = `translateX(${newState - parseInt(items.current.style.left)}px)`
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
};

export default Items;