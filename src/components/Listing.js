import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function Listing(props) {
  const { items } = props;

  return (
    <div>
      <Item_container>
        {items.map((item) => {
          return (
            <Item key={item.id}>
              <Description>
                <h2>{item.name}</h2>
                <h5>{item.description}</h5>

                <h3>${item.price}</h3>
                <button>Add to cart</button>
              </Description>
              <img src={item.image} alt="fishing reel" />
            </Item>
          );
        })}
      </Item_container>
      <footer></footer>
    </div>
  );
}

const mapState = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapState)(Listing);
const Item_container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;
const Item = styled.div`
  border: 2px solid grey;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 35%;
  img {
    width: 50%;
    padding: 15px;
  }
`;

const Description = styled.div`
  padding: 15px;
`;
