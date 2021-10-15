import React, { createContext } from "react";
import Footer from "./components/Footer/Footer";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import useFoods from "./hooks/useFoods";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import OrderDetails from "./components/OrderReview/OrderReview";
import Login from "./components/Login/Login";
import useFirebase from "./hooks/useFirebase";
import SignUp from "./components/SignUp/SignUp";
import Shiping from "./components/Shipping/Shiping";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import Ordered from "./components/Ordered/Ordered";

export const ContextApi = createContext();

const App = () => {
  const foodContext = useFoods();
  const authContext = useFirebase();

  const allContext = { ...foodContext, ...authContext };
  return (
    <ContextApi.Provider value={allContext}>
      <BrowserRouter>
        <HeaderNav></HeaderNav>

        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Foods></Foods>
          </Route>
          <Route path="/orderreview">
            <OrderDetails></OrderDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivetRoute path="/shipping">
            <Shiping></Shiping>
          </PrivetRoute>
          <Route path="/ordered">
            <Ordered></Ordered>
          </Route>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </ContextApi.Provider>
  );
};

export default App;
