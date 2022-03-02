import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function Checkout(props) {
  const { basket } = props;

  return (
    <div>
      <div>
        {basket.map((item) => {
          {
            console.log(item);
          }
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
    </div>
  );
}
const mapState = (state) => {
  return {
    basket: state.basket,
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
