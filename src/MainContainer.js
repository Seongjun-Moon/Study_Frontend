import React, { Component } from "react";
import axios from "axios";

class MenuContainer extends Component {
  login() {
    let headers = {
      authorization: "JWT fefege..",
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const send_param = {
      loginId: "as",
      loginPw: "df",
    };
    axios.post("http://localhost:8080/login", send_param).then((res) => {
      if (res.data) {
        alert(res.data);
      } else {
        alert("false");
      }
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1>영화 찾기</h1>
          <div>
            <input ref={(ref) => (this.loginId = ref)}></input>
            <input ref={(ref) => (this.loginPw = ref)}></input>
            <button onClick={this.login}>로그인</button>
          </div>

          <ul>
            <li>영화</li>
            <li>Post</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default MenuContainer;
