import { useState } from "react";
import "./todo.css";
// import List from './List';
function Todo() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, setItemList] = useState([]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setCurrentItem(e.target.value);
  };
  const addItemList = () => {
    setItemList([...itemList, currentItem]);
    //  setItemList([...itemList,{item:currentItem ,key:Date.now()}])
    // console.log(itemList);;l,
    setCurrentItem("");
  };
  const deleteItem = (id) => {
    const newtodo = [...itemList];
    newtodo.splice(id, 1);
    setItemList(newtodo);
  };
  return (
    <div className="todo__container">
      <div className="todo__split">
        <div className="todo__about">
          <h1>TODO LIST</h1>
          <h4> "your compass to navigate the sea of productivity."</h4>
        </div>
        <div className="todo__content">
          <div className="todo__add">
            <h1>ADD TODO</h1>
            <div className="todo__task">
              <input
                placeholder="Add Item "
                value={currentItem}
                onChange={onChangeHandler}
              />
              <button
                type="submit"
                disabled={!currentItem}
                onClick={addItemList}
              >
                Add
              </button>
            </div>
          </div>
          <div className="todo__itemlist">
            <ol>
              {itemList.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                  <button onClick={() => deleteItem(index)}>Delete</button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todo;
