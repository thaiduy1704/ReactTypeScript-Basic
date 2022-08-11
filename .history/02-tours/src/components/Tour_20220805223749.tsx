import React, { useState } from "react";

export interface TourType {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

const Tour: React.FC<TourType> = ({ name, info, image, price }) => {
  const [readMore, setReadMore] = useState<Boolean>(true);

  const toggleShowMore = () => {
    setReadMore(!readMore);
  };

  return <div>Tour</div>;
};

const Wrapper = styled.article`
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  margin-bottom: 3rem;
  img {
    width: 100%;
    height: 35rem;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .tour__info {
    padding: 2.5rem;
    text-align: left;
    h3 {
      font-size: 2rem;
      letter-spacing: 3px;
    }
    .price {
      font-size: 1.5rem;
      background-color: #ebf7ff;
      color: var(--clr-primary);
      padding: 0.4rem 0.75rem;
      border-radius: var(--radius);
      font-weight: bold;
    }
  }
  .tour__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  button {
    cursor: pointer;
    font-size: 1.8rem;
    background-color: transparent;
    color: #49a6e9;
    border: none;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: capitalize;
    margin-left: 1rem;
  }
`;
export default Tour;
