import React, { Component } from "react";
import { connect } from "react-redux";
// import { Card, Row, Col, Input, Button } from "antd";
// import { getUsers } from "./store/actions/yelpActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // this.props.getData(this.state.value, 20, (this.state.n + 1) * 20 + 1, true);

  render() {
    return <div>someting</div>;
  }
}

const mapStateToProps = state => ({
  // data: state.yelp.data
});

const mapDispatchToProps = dispatch => ({
  // getData: (value, limit, offset, loadtype) =>
  //   dispatch(getUsers(value, limit, offset, loadtype))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
