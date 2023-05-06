import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";
import { addToBasket, getFishingItems } from "../actions";

function SingleProduct(props) {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const { items } = props;

  useEffect(() => {
    items
      .filter((item) => item.id === parseInt(id))
      .map((item) => {
        setProduct(item);
      });
  }, []);

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

          <h3>${product.price}</h3>
          <Button onClick={() => props.dispatch(addToBasket(product))}>
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
