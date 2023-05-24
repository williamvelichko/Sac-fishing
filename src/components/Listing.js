import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Listing(props) {
  const { items } = props;
  const { push } = useHistory();

  const handleClick = (item) => {
    push(`/singleproduct/${item.id}`);
  };

  return (
    <Main>
      <Item_container>
        {items.map((item) => {
          return (
            <Item
              key={item.item_id}
              className="Item"
              onClick={() => handleClick(item)}
            >
              <Description>
                <h2>{item.name}</h2>
                <h5>{item.description}</h5>

                <h3>${item.price}</h3>
                <Rating>
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <p>🌟</p>
                    ))}
                </Rating>
              </Description>

              <img src={item.image} alt="fishing reel" />
            </Item>
          );
        })}
      </Item_container>
    </Main>
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
  justify-content: center;

  width: 100%;
  .Item:hover {
    box-shadow: 0px 0px 10px grey;
  }
  @media (max-width: 850px) {
    flex-direction: column;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 20px;
  margin-top: 20px;
  width: 35%;
  img {
    width: 50%;
    padding: 15px;
    filter: brightness(1.1) invert(0);
  }

  @media (max-width: 850px) {
    width: 100%;
  }
  transition: box-shadow 0.3s;
  @media (max-width: 420px) {
    width: 100%;
    align-items: center;
    img {
      width: 60%;
      height: 40vh;
      padding: 0;
      background-size: contain;
    }
  }
`;
const Main = styled.div`
  margin: auto;
  font-family: Fira Sans;
`;
const Description = styled.div`
  padding: 15px;
  @media (max-width: 420px) {
    padding: 5px;
    width: 40%;
    h2 {
      font-size: 1.2rem;
    }
    h5 {
      font-size: 0.7rem;
    }
  }
`;
const Rating = styled.div`
  display: flex;
`;
