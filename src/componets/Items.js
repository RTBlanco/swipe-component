import Item from "./Item";
import './Items.css'

const Items = () => {

  const renderItems = () => {
    return [1,2,3,4,5,6,7,8,9,10].map((num, i) => <Item item={num} key={i} />)
  }

  return (
    <div id="items-container">
      <div id="inner">
        {renderItems()}
      </div>
    </div>
  );
};

export default Items;