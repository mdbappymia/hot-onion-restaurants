import React, { createContext } from "react";
import Footer from "./components/Footer/Footer";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import useFoods from "./hooks/useFoods";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OrderDetails from "./components/OrderReview/OrderReview";

export const ContextApi = createContext();

const App = () => {
  const allContext = useFoods();
  return (
    <ContextApi.Provider value={allContext}>
      <BrowserRouter>
        <HeaderNav></HeaderNav>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Foods></Foods>
          </Route>
          <Route path="/orderreview">
            <OrderDetails></OrderDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </ContextApi.Provider>
  );
};

export default App;
