import { useEffect, useState } from "react";

const useFoods = () => {
  const [foods, setFoods] = useState([]);
  const [categoryfoods, setCategoryFoods] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("fakeDb.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  useEffect(() => {
    categorySelected("breakfast");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foods]);
  const categorySelected = (category) => {
    const selectedFoods = [];
    for (let food of foods) {
      if (food.category === category) {
        selectedFoods.push(food);
      }
    }
    setCategoryFoods(selectedFoods);
  };
  const cartHandler = (food) => {
    if (!food.quantity) {
      food.quantity = 1;
    }
    for (let item of cart) {
      if (item.name === food.name) {
        setCart([...cart]);
        return;
      }
    }
    setCart([...cart, food]);
  };
  const up = (food) => {
    for (let item of cart) {
      if (item.name === food.name) {
        item.quantity = item.quantity + 1;
        setCart([...cart]);
        return;
      }
    }
    console.log(cart);
  };
  const removeToCart = (food) => {
    const newCart = cart.filter((item) => food.name !== item.name);
    setCart(newCart);
  };
  const down = (food) => {
    for (let item of cart) {
      if (item.name === food.name) {
        item.quantity = item.quantity - 1;
        setCart([...cart]);
        if (food.quantity === 0) {
          removeToCart(food);
          return;
        }
        return;
      }
    }
  };
  const calculateTotal = () => {
    let grandTotalPrice = 0;
    for (let item of cart) {
      grandTotalPrice = grandTotalPrice + item.price * item.quantity;
    }
    return grandTotalPrice.toFixed(2);
  };

  return {
    categorySelected,
    categoryfoods,
    cart,
    cartHandler,
    removeToCart,
    up,
    down,
    calculateTotal,
  };
};

export default useFoods;
