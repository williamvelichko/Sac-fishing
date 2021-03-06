import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <MainHome>
        <Info>
          <h1>Rods, Reels, + More</h1>
          <Link to="/listing" className="link">
            Shop Know
          </Link>
        </Info>
        {/* <Items> */}
        <Images>
          <img
            src="https://media.istockphoto.com/photos/fishing-rod-with-a-spinning-reel-in-the-hands-of-a-fisherman-fishing-picture-id1211643124?b=1&k=20&m=1211643124&s=170667a&w=0&h=ni6V9ehTW1UFurMWdIzfEUmYfJvWIDnNFU9lqkjQ7PQ="
            alt="fishing rod"
          />

          <img
            src="https://images.unsplash.com/photo-1537872384762-e785271d14f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZpc2hpbmclMjByb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="fishing rod"
          />

          <img
            src="https://media.istockphoto.com/photos/fishing-lures-in-tackle-boxes-with-spinning-rod-and-net-picture-id471194270?b=1&k=20&m=471194270&s=170667a&w=0&h=WYYIxubGRHfy5StOmPpn8Y7mQckqlr3G3eMPtfIcpyY="
            alt="tackle"
          />
        </Images>
        {/* <Link_wrapper>
            <Link to="/listing" className="link">
              <h4>Spinning reels</h4>
            </Link>
            <Link to="/listing" className="link">
              <h4>Baitcasting</h4>
            </Link>
            <Link to="/listing" className="link">
              <h4>Tackle</h4>
            </Link>
          </Link_wrapper> */}
        {/* </Items> */}
      </MainHome>
    </div>
  );
}

export default HomePage;

const Info = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  border-radius: 5%;
  margin: auto;
  margin-top: 150px;
  background-color: grey;
  padding: 40px;
  opacity: 0.8;
  h1 {
    padding: 30px;
    color: white;
  }
  .link {
    text-decoration: none;
    background-color: white;
    width: 40%;
    margin: auto;
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid #8d99ae;
    font-size: 1.3rem;
    font-weight: bolder;
    color: grey;
    transition: 0.2s;
  }
  .link:hover {
    box-shadow: 0px 0px 10px silver;
  }

  @media (max-width: 420px) {
    width: 50%;
    h1 {
      font-size: 1.5rem;
    }
    button {
      width: 70%;
    }
  }
`;
const MainHome = styled.div`
  font-family: Fira Sans;
  display: flex;

  width: 100%;
  flex-direction: column;
  align-content: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-image: url("https://media.istockphoto.com/photos/man-fishing-at-morning-sunrise-in-a-mountain-river-in-alaska-usa-picture-id1297122324?b=1&k=20&m=1297122324&s=170667a&w=0&h=cH3eqt6zp0q1nZekYmDGXQJ2zoW1QO1scJ0xCx-qITc=");

  height: 130vh;
  background-size: cover;
  //mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Items = styled.div`
  background-color: grey;

  width: 100%;
  //padding: 100px;
  margin-bottom: 200px;

  img {
    width: 30%;
  }
  @media (max-width: 420px) {
  }
`;
const Images = styled.div`

  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  //justify-content: space-evenly;
  //padding: 30px;
  img {
    display:flex;
  
    width: 34%;
  //margin: auto;
    
  }
  @media (max-width: 420px) {
    
    padding: 10px;
`;
const Link_wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;

  justify-content: space-evenly;

  .link {
    text-decoration: none;
    font-size: 1.4rem;
    color: black;
    margin-right: 50px;
    h4 {
      padding: 8px;
    }
  }
  @media (max-width: 420px) {
    .link {
      font-size: 1rem;
      margin: auto;
    }
  }
`;
