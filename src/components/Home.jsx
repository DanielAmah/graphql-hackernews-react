import React, { Component } from "react";
// import { Redirect } from "react-router";
import { axiosInstance } from "../helpers/authentication";
import ResponsiveContainer from "./ResponsiveContainer";

class Home extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   logout: false
    // };
    this.handleLogout = this.handleLogout.bind(this);
  }

  async handleLogout() {
    const {history} = this.props
    const res = await axiosInstance.delete("logout", {}, {});
    if (res) {
      // eslint-disable-next-line no-console
      window.localStorage.clear();
      history.push('/login')
      // this.setState({ logout: true });
    }
  }

  render() {
    // const { logout } = this.state;
    return  (

      <ResponsiveContainer handleLogout={this.handleLogout} />
    );
  }
}

export default Home;
