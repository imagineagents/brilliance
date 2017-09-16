import React, { Component } from "react";
import Browse from "../components/browse/";
import BlankPage2 from "../components/blankPage2";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";

export default (DrawNav = DrawerNavigator(
  {
    Browse: { screen: Browse },
    BlankPage2: { screen: BlankPage2 }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
