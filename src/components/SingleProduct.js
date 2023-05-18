import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";
import { addToBasket } from "../actions";

function SingleProduct(props) {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const [quantity, setQuantity] = useState(1);
  const { items, dispatch } = props;

  useEffect(() => {
    items
      .filter((item) => item.id === parseInt(id))
      .map((item) => {
        setProduct(item);
      });
  }, []);

  const oneLess = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const oneMore = () => {
    setQuantity(quantity + 1);
  };

  const handleChange = (e) => {
    setQuantity((e.target.name = e.target.value));
  };

  const addToCheckout = (e) => {
    dispatch(addToBasket(product, quantity));
    setQuantity(1);
  };

  return (
    <Container>
      <ProductContainer>
        <ImgContainer>
          <img src={product.image} alt="fishing reel" />
        </ImgContainer>
        <Description>
          <h2>{product.name}</h2>

          <Rating>
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </Rating>
          <h5>{product.description}</h5>
          <Pricing>
            <h3>${product.price * quantity}</h3>
            <QuanitityInput>
              <button onClick={oneLess}>-</button>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleChange}
                min="1"
                max="5"
              ></input>
              <button onClick={oneMore}>+</button>
            </QuanitityInput>
          </Pricing>
          <Button onClick={addToCheckout}>
            <p>Add to cart</p>
          </Button>
        </Description>
      </ProductContainer>
    </Container>
  );
}
const mapState = (state) => {
  return {
    items: state.items,
  };
};
export default connect(mapState)(SingleProduct);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  width: 60%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border-right: 1px solid grey;
  img {
    width: 80%;
    height: 70vh;
    filter: brightness(1.1) invert(0);
  }
  @media (max-width: 850px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid grey;
    height: 80vh;
  }
  @media (max-width: 420px) {
    height: 60vh;
    img {
      width: 90%;
      height: 50vh;
    }
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  font-family: Fira Sans;
  width: 40%;
  font-size: 1.3rem;
  margin-left: 20px;
  @media (max-width: 850px) {
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;
const Rating = styled.div`
  display: flex;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 30%;
  padding: 10px;
  background-color: #3a5a40;
  transition: 0.2s;
  text-transform: uppercase;
  border: transparent;
  p {
    margin: 0;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
  }
  :hover {
    background-color: #588157;
  }

  @media (max-width: 500px) {
    width: 40%;
    p {
      font-size: 0.8rem;
    }
  }
`;
const Pricing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  margin-bottom: 25px;
  h3 {
    width: 40%;
  }
  @media (max-width: 420px) {
    width: 70%;
  }
`;

const QuanitityInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  input {
    width: 30%;
    height: 45%;
    text-align: center;
    border: 1px solid black;
  }
  button {
    height: 35%;
    background-color: white;
    border: 1px solid black;
    font-size: 1rem;
  }
`;
