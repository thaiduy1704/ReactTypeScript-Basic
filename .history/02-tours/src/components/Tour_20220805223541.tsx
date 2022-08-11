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

export default Tour;
