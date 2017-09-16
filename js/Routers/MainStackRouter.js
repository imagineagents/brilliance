import React, { Component } from "react";
import Browse from "../components/browse";
import Search from "../components/search";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";

export default (StackNav = StackNavigator({
  Browse: { screen: Browse },
  Search: { screen: Search }
}));
