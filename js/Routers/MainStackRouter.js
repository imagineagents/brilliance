import React, { Component } from "react";
import Browse from "../components/browse/";
import BlankPage from "../components/blankPage";
// import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";

// HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
//   header: null
// });

export default (StackNav = StackNavigator({
  Browse: { screen: Browse },
  BlankPage: { screen: BlankPage }
}));
