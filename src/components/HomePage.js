import React from "react";
import styled from "styled-components";

function HomePage() {
  return (
    <div className="home">
      <Home_img>
        <img
          src="https://media.istockphoto.com/photos/man-fishing-at-morning-sunrise-in-a-mountain-river-in-alaska-usa-picture-id1297122324?b=1&k=20&m=1297122324&s=170667a&w=0&h=cH3eqt6zp0q1nZekYmDGXQJ2zoW1QO1scJ0xCx-qITc="
          alt=""
        />
        <Info>
          <h1>Rods, Reels, + More</h1>
        </Info>
      </Home_img>
    </div>
  );
}

export default HomePage;

const Home_img = styled.div`
  img {
    width: 100%;
    z-index: -1;
    margin-bottom: -300px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

const Info = styled.div`
  display: flex;

  justify-content: center;
  align-content: center;
  width: 30%;
  margin: auto;

  background-color: grey;
  h1 {
    padding: 30px;
    color: white;
  }
`;
