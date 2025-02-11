import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import ProductsLayout from "../../Layouts/ProductsLayout/ProductsLayout";
import { getDataFromDB } from "../../helper/api";
const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getDataFromDB(8, 0)
      .then((resp) => resp)
      .then((data) => setTrending(data));
  }, []);

  return (
    <div>
      <ProductsLayout title="Trending Products">
        {trending.map((product) => {
          return (
            <CartItem
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              category={product.category}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          );
        })}
      </ProductsLayout>
    </div>
  );
};

export default Home;
