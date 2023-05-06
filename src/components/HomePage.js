import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <MainContainer>
      <MainHome>
        <Info>
          <h1>Rods, Reels, + More</h1>
          <Link to="/listing" className="link">
            Shop Now
          </Link>
        </Info>
      </MainHome>
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
    </MainContainer>
  );
}

export default HomePage;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  border-radius: 15px;
  margin: auto;
  margin-top: 150px;
  background-color: #588157;
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
    border: 1px solid white;
    font-size: 1.3rem;
    font-weight: bolder;
    color: grey;
    transition: 0.2s;
  }
  .link:hover {
    background-color: #588157;
    color: white;
  }

  @media (max-width: 850px) {
    h1 {
      font-size: 1.5rem;
    }
    .link {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 420px) {
    width: 50%;

    h1 {
      font-size: 1.3rem;
      padding: 0;
    }
    .link {
      font-size: 1rem;
      width: 50%;
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
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1545450660-3378a7f3a364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
  height: 80vh;
  background-size: cover;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  img {
    display: flex;
    width: 34%;
  }
  @media (max-width: 420px) {
  }
`;
