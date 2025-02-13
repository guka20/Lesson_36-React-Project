import React, { useContext, useEffect, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import ProductsLayout from "../../Layouts/ProductsLayout/ProductsLayout";
import { getDataFromDB } from "../../helper/api";
import Loading from "../../components/Loading/Loading";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getDataFromDB(8, 0)
      .then((resp) => resp)
      .then((data) => setTrending(data));

    getDataFromDB(8, 8)
      .then((resp) => resp)
      .then((data) => setNewArrival(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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

          <ProductsLayout title="New Arrivals">
            {newArrival.map((product) => {
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
        </>
      )}
    </div>
  );
};

export default Home;
