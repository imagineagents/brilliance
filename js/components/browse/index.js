import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import BlankPage2 from "../blankPage2";
import DrawBar from "../DrawBar";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";

class Browse extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.number),
    openDrawer: React.PropTypes.func
  };

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          	<Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon active name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>Browse</Title>
          </Body>

          <Right>
            
          </Right>
        </Header>
        <Content>
          <Button style={styles.searchAll} warning block>
            <Text>SEARCH ALL</Text>
          </Button>
          <Grid style={styles.mt}>
            <Col>
              {this.props.list.map((item, i) => {
                return (i%2 === 0) ?
                  (
                    <Row key={i}>
                      <TouchableOpacity
                        style={{...styles.row, marginRight: 5}}
                        onPress={() =>
                          this.props.navigation.navigate("Search", {
                            name: { item }
                          })}
                      >
                        <Image source={item} style={styles.image}/>
                      </TouchableOpacity>
                    </Row>
                  )
                  : null;
              })}
            </Col>
            <Col>
              {this.props.list.map((item, i) => {
                return (i%2 === 1) ?
                  (
                    <Row key={i}>
                      <TouchableOpacity
                        style={styles.row}
                        onPress={() =>
                          this.props.navigation.navigate("Search", {
                            name: { item }
                          })}
                      >
                        <Image source={item} style={styles.image}/>
                      </TouchableOpacity>
                    </Row>
                  )
                  : null;
              })}
            </Col>  
          </Grid>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  };
}
const mapStateToProps = state => ({
  list: state.list.list
});

const BrowseSwagger = connect(mapStateToProps, bindAction)(Browse);
const DrawNav = DrawerNavigator(
  {
    Browse: { screen: BrowseSwagger },
    BlankPage2: { screen: BlankPage2 }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;
