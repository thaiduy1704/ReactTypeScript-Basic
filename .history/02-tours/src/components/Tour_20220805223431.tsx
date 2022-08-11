import React from "react";

export interface TourType {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

const Tour: React.FC<TourType> = ({name,info,image,price}) => {
    const [readMore, setReadMore] = useState<Boolean>(second)



  return <div>Tour</div>;
};

export default Tour;
