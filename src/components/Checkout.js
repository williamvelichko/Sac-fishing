import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function Checkout(props) {
  const { basket, emptyBasket } = props;

  return (
    <div>
      {emptyBasket ? (
        <Editing>
          <h2>Shopping Cart Is Empty </h2>
        </Editing>
      ) : (
        <div>
          {basket.map((item) => {
            return (
              <Item key={item.id}>
                <img src={item.image} alt="image" />
                <Des>
                  <h2>{item.name}</h2>
                  <h3>${item.price}</h3>
                </Des>
              </Item>
            );
          })}
        </div>
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

const Item = styled.div`
  display: flex;
  width: 40%;
  img {
    width: 30%;
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
