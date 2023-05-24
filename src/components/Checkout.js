import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SPCheckout from "../singleProduct/SPCheckout";

function Checkout(props) {
  const { basket, dispatch } = props;

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [basket]);

  const calculateTotalPrice = function () {
    if (basket.length === 0) {
      setTotalPrice(0);
    } else {
      const totalPrice = basket
        .map((item) => item.price * item.inBasket)
        .reduce((prev, next) => prev + next);
      setTotalPrice(totalPrice);
    }
  };

  return (
    <Main>
      <CheckoutTop>
        <div className="check">
          <h2>Shopping Cart</h2>
          <h3>
            Subtotal:
            <strong>${totalPrice}</strong>
          </h3>
        </div>
      </CheckoutTop>
      {basket.length === 0 ? (
        <Editing>
          <h2>Shopping Cart Is Empty</h2>
        </Editing>
      ) : (
        <ItemContainer>
          {basket.map((item) => (
            <SPCheckout
              key={item.id}
              item={item}
              dispatch={dispatch}
              calculateTotalPrice={calculateTotalPrice}
            />
          ))}
        </ItemContainer>
      )}
    </Main>
  );
}

const mapState = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapState)(Checkout);

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  font-family: Fira Sans;
  align-items: center;
`;

const ItemContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 30px;

  @media (max-width: 850px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

const Editing = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  width: 65%;
  margin: auto;
  margin-top: 50px;
  font-family: Fira Sans;

  h2 {
    font-size: 2rem;
  }
  @media (max-width: 420px) {
    width: 80%;
    h2 {
      padding: 10px;
      font-size: 1.6rem;
    }
  }
`;

const CheckoutTop = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  border-bottom: 1px solid grey;
  @media (max-width: 550px) {
  }
  .check {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
      width: 20%;
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      @media (max-width: 850px) {
        width: 40%;
        font-size: 1.3rem;
      }
      @media (max-width: 420px) {
        font-size: 1rem;
        width: 45%;
      }
    }
    h3 {
      padding: 10px;
      width: 20%;
      display: flex;
      justify-content: space-evenly;
      font-size: 1.1rem;
      align-items: center;
      @media (max-width: 850px) {
        width: 35%;
        font-size: 1rem;
      }
      @media (max-width: 420px) {
        width: 40%;
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width: 420px) {
  }
`;
