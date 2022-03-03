import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";

function Header(props) {
  const { basket } = props;
  return (
    <MainHeader>
      <Link to="/homepage" className="title">
        <h1>Sac-Fishing</h1>
      </Link>

      <NavBar>
        <nav>
          <Link className="link" to="/homepage">
            <h3>Home</h3>
          </Link>
          <Link className="link" to="/listing">
            <h3>Shop</h3>
          </Link>
          <Link className="link" to="/signup">
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
  .title {
    display: flex;
    justify-content: center;
    text-decoration: none;

    width: 20%;
    font-size: 1.2rem;
    color: white;
    font-family: "Rowdies", cursive;
  }
  .title:hover {
    border: 1px solid white;
  }
  @media (max-width: 420px) {
    .title {
      font-size: 0.8rem;
      margin-left: 15px;
    }
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
    justify-content: center;
    text-decoration: none;
    color: white;
    width: 15%;
    padding: 10px;
  }
  .link:hover {
    border: 1px solid white;
  }
  @media (max-width: 420px) {
    width: 60%;
    .link {
      width: 30%;
      font-size: 0.8rem;
      padding: 0;
    }
    nav {
      .cart {
        font-size: 1.5rem;
      }
    }
  }
`;
