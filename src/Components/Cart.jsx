import React, { useContext } from "react";
import { mycontext } from "../App";

const Cart = () => {
  const [data, setData] = useContext(mycontext);
  const totalPrice = data.reduce(
    (total, data) => Math.round(total + data.price*(data.quantity || 1)),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
const handelDel= (id)=>{
    setData((curr)=> curr.filter((ele)=>ele.id !== id))
}
  const handleInc = (id, quantity) => {
    setData((currentValue) => {
      return currentValue.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: (element.quantity  || quantity) + 1};
        }
        else {
            return element
        }
      });
    });
  };
  const handledec = (id, quantity) => {
    setData(currentValue => {
      return currentValue.map((element) => {
        if (element.id === id && quantity>1) {
          return { ...element, quantity: (element.quantity  || quantity) - 1 };
        }
        else {
            return element
        }
      });
    });
  };
  return (
    <>
    <h1 className="text card fixed-top text-center bg-secondary ">Shopping Cart</h1>
     <div className="card fixed-bottom mx-5">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="fw-bold">SUB TOTAL</p>
            <p className="fw-bold">rs{totalPrice}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fw-bold">SHIPPING</p>
            <p className="fw-bold">FREE</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Total:</p>
            <p className="fw-bold">rs{totalPrice}</p>
          </div>
        </div>
      </div>
    
      {data.map((element, index) => {
        return (
<div className="product container-fluid bg-primary bg-gradient bg-opacity-50 text-center y-50 mb-3 p-3">
<div className="row align-items-center">
<div className="col">
<img src={element.image} alt="" />
    </div>
    <div className="col">
      <p>
        <h3>{element.title}</h3>
        <h4 classNameName="text-start">product Description :</h4>
        <h5>{element.description}</h5>
      </p>
    </div>
    <div className="col">
    <button type="button" className="btn btn-success"
              onClick={() => handleInc(element.id, element.quantity || 1)}
            >
              +
            </button>
<span><h2>{element.quantity||1}</h2></span>
            <button type="button" className="btn btn-info"
              onClick={() => handledec(element.id, element.quantity || 1)}
            >
              -
            </button>
            <button type="button" className="btn btn-danger" onClick={()=>handelDel(element.id)}>remove</button>
    </div>

</div>
</div>

          
        );
      })}
      
    </>

    
  );
  
};

export default Cart;

