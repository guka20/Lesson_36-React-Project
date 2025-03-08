import React, { useEffect, useState, useContext } from "react";
import { ProductsLayout } from "@/Layouts";
import { getDataFromDB } from "@/helper/api";
import { Loading, CartItem } from "@/components";
import { IsDarkContext } from "@/Contexts/IsDarkProvider";
import "./Home.css";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const { isDark } = useContext(IsDarkContext);
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
    <div className={isDark ? "dark" : "light"}>
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
