import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Card,
  CardItem
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";

class Search extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.number),
    openDrawer: React.PropTypes.func
  };

  render() {
    const { props: { index, list } } = this;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" /><Text>Back</Text>
            </Button>
          </Left>

          <Body>
            <Title>Browse</Title>
          </Body>

          <Right />
        </Header>

        <Content>
          <Grid style={styles.mt}>
            <Col>
              <Row>
                <Card>
                  <CardItem cardBody>
                    <Image source={require('../../../images/igi.png')} style={styles.image}/>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                        0.13 Ora Diamond Certified, 0.13 Ora Diamond
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="ios-information-circle-outline" />
                      </Button>
                    </Left>
                    <Right>
                      <Button transparent>
                        <Icon active name="ios-cart" />
                        <Text>$559</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              </Row>
            </Col>
            <Col>
              <Row>
                <Card>
                  <CardItem cardBody>
                    <Image source={require('../../../images/igi.png')} style={styles.image}/>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                        0.13 Ora Diamond Certified, 0.13 Ora Diamond
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="ios-information-circle-outline" />
                      </Button>
                    </Left>
                    <Right>
                      <Button transparent>
                        <Icon active name="ios-cart" />
                        <Text> $559</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              </Row>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer())
  };
}

const mapStateToProps = state => ({
  index: state.list.selectedIndex,
  list: state.list.list
});

export default connect(mapStateToProps, bindAction)(Search);
