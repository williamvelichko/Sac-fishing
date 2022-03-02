import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { removeItem } from "../actions";

function Checkout(props) {
  const { basket, emptyBasket } = props;
  const getBasketTotal = () => {
    return basket?.reduce((amount, item) => item.price + amount);
  };

  return (
    <div>
      <div>
        <h3>
          Subtotal ({basket.length} items) <strong>${getBasketTotal}</strong>
        </h3>
        <button>Proceed To Checkout</button>
      </div>
      {emptyBasket ? (
        <Editing>
          <h2>Shopping Cart Is Empty </h2>
        </Editing>
      ) : (
        <Item_container>
          {basket.map((item) => {
            return (
              <Item key={item.id}>
                <img src={item.image} alt="image" />
                <Des>
                  <h2>{item.name}</h2>
                  <Rating>
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <p>🌟</p>
                      ))}
                  </Rating>
                  <h3>${item.price}</h3>
                  <button onClick={() => props.dispatch(removeItem(item))}>
                    Remove Item
                  </button>
                </Des>
              </Item>
            );
          })}
        </Item_container>
      )}
    </div>
  );
}
const mapState = (state) => {
  return {
    basket: state.basket,
    emptyBasket: state.EmptyBasket,
  };
};
export default connect(mapState)(Checkout);

const Item_container = styled.div`
  // border: 2px solid grey;
  width: 70%;
  margin: auto;
  margin-top: 30px;
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid grey;
  margin-bottom: 20px;
  padding-bottom: 20px;
  img {
    width: 20%;
  }
`;
const Des = styled.div`
  padding: 15px;
`;
const Editing = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  width: 65%;
  margin: auto;
  margin-top: 50px;
  h2 {
    font-size: 2rem;
    font-family: Grover;
  }
`;
const Rating = styled.div`
  display: flex;
`;
