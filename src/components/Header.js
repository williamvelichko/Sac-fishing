import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";

function Header(props) {
  const { basket } = props;
  return (
    <MainHeader>
      {/* <div className="title"> */}
      <h1>Sac-Fishing</h1>
      {/* </div> */}

      <NavBar>
        <nav>
          <Link className="link" to="/homepage">
            <h3>Home</h3>
          </Link>
          <Link className="link" to="/listing">
            <h3>Shop</h3>
          </Link>
          <Link className="link" to="/register">
            <h3>Register</h3>
          </Link>
          <Link className="link" to="/cart">
            <ShoppingCartIcon className="cart" />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>

            {/* <h3>Checkout</h3> */}
          </Link>
        </nav>
      </NavBar>
    </MainHeader>
  );
}

const mapState = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapState)(Header);

const MainHeader = styled.div`
  font-family: Fira Sans;
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  background-color: grey;
  h1 {
    margin-left: 15px;
    width: 20%;
    font-size: 2.4rem;
    color: white;
  }
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;

  width: 50%;
  margin-right: 20px;
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .cart {
      font-size: 2rem;
      padding: 5px;
      align-text: center;
    }
  }
  .link {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
`;
