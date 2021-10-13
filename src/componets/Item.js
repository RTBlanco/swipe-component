import './Item.css'


const Item = ({item}) => {
  return (
    <div className="item">
      <h1>{item}</h1>
    </div>
  );
};

export default Item;