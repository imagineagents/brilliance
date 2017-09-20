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
  Card, CardItem,
  Tab, Tabs, TabHeading,
  ListItem, List,
  Radio
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
        <Header hasTabs>
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

        <Tabs initialPage={2}>
          <Tab heading={ <TabHeading><Text style={{fontSize: 16}}>Filters</Text><Icon style={{fontSize: 16}} name="ios-options" /></TabHeading>}>
            <Content style={{opacity: 0.5}}>
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
                            <Text> $559</Text>
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
          </Tab>
          <Tab heading={ <TabHeading><Text style={{fontSize: 16}}>Sort by</Text><Icon style={{fontSize: 16}} name="ios-arrow-down" /></TabHeading>}>
            <List>
              <ListItem>
                <Grid>
                  <Col size={65}>
                    <Row>
                      <Left>
                        <Icon style={{fontSize: 14, color: '#ffa800'}} name="arrow-round-down" />
                        <Text style={{fontSize: 8, marginLeft: -10, color: '#ffa800'}}>HIGHEST TO LOWEST</Text>
                      </Left>
                    </Row>
                  </Col>
                  <Col size={35}>
                    <Row>
                      <Left>
                        <Icon style={{fontSize: 14}} name="arrow-round-up" />
                        <Text style={{fontSize: 8, marginLeft: -10}}>LOWEST TO HIGHEST</Text>
                      </Left>
                    </Row>
                  </Col>
                </Grid>
              </ListItem>
              <ListItem>
                <Text style={{fontSize: 16}}>Shape</Text>
                <Right>
                  <Radio selected={false} />
                </Right>
              </ListItem>
              <ListItem>
                <Text style={{fontSize: 16}}>Carat</Text>
                <Right>
                  <Radio selected={true} />
                </Right>
              </ListItem>
              <ListItem>
                <Text style={{fontSize: 16}}>Color</Text>
                <Right>
                  <Radio selected={true} />
                </Right>
              </ListItem>
              <ListItem>
                <Text style={{fontSize: 16}}>Price</Text>
                <Right>
                  <Radio selected={true} />
                </Right>
              </ListItem>
              <Button block>
                <Text style={{fontSize: 16}}>APPLY</Text>
              </Button>
            </List>
            <Content style={{opacity: 0.5}}>
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
                            <Text> $559</Text>
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
          </Tab>
          <Tab heading={ 
            <TabHeading>
              <Button transparent style={{width: 0}}><Icon name="ios-list" style={{color: '#6b6b6b'}}/></Button>
              <Button transparent style={{width: 0}}><Icon active style={{fontSize: 16}} name="ios-apps"/></Button>
            </TabHeading>}>

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
                            <Text> $559</Text>
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
          </Tab>
        </Tabs>
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
