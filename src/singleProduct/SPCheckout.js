import React, { useEffect, useState } from "react";
import { removeItem, addToBasket } from "../actions";
import styled from "styled-components";

function SPCheckout(props) {
  const { item, dispatch } = props;
  const [quantity, setQuantity] = useState(item.inBasket);

  useEffect(() => {
    setTimeout(() => {
      dispatch(addToBasket(item, quantity));
    }, 1000);
  }, [quantity]);

  const handleChange = (e) => {
    setQuantity((e.target.name = e.target.value));
  };

  const oneLess = function () {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const oneMore = function () {
    setQuantity(quantity + 1);
  };

  return (
    <Item>
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
        <Pricing>
          <h3>${item.price * quantity}</h3>
          <QuantityInput>
            <button onClick={oneLess}>-</button>
            <input
              type="text"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              value={quantity}
              onChange={handleChange}
            ></input>
            <button onClick={oneMore}>+</button>
          </QuantityInput>
        </Pricing>
        <ButtonDiv>
          <RemoveButton onClick={() => dispatch(removeItem(item))}>
            Remove
          </RemoveButton>
        </ButtonDiv>
      </Des>
    </Item>
  );
}

export default SPCheckout;

const Item = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid grey;
  margin-bottom: 20px;
  padding-bottom: 20px;
  justify-content: space-evenly;
  img {
    width: 30%;
    filter: brightness(1.1) invert(0);
    @media (max-width: 850px) {
      width: 50%;
    }
  }

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 90%;
    }
  }
`;
const Des = styled.div`
  padding: 15px;
  width: 30%;
  h2 {
    font-size: 1.4rem;
  }
  @media (max-width: 420px) {
    flex-direction: row;
    width: 90%;

    h2 {
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

const Rating = styled.div`
  display: flex;
  @media (max-width: 420px) {
    justify-content: center;
  }
`;

const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  h3 {
    width: 100%;
  }
  @media (max-width: 420px) {
    flex-direction: row;
    align-items: center;
    h3 {
      width: 40%;
    }
  }
`;

const QuantityInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  margin-bottom: 20px;
  @media (max-width: 850px) {
    width: 60%;
  }
  @media (max-width: 420px) {
    width: 50%;
    margin: 0;
  }
  input {
    width: 30%;
    padding: 5px;
    height: 100%;
    text-align: center;
    border: 1px solid black;
  }
  button {
    height: 30%;
    background-color: white;
    border: 1px solid black;
    font-size: 1rem;
  }
`;

const ButtonDiv = styled.div`
  @media (max-width: 420px) {
    display: flex;
    justify-content: center;
  }
`;

const RemoveButton = styled.button`
  background-color: white;
  border: transparent;
  font-size: 0.9rem;
  font-weight: 500;
  transition-in-out: 1s;
  :hover {
    font-weight: bold;
  }
`;
