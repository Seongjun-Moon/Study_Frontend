import React, { Component } from "react";

class Login extends Component {

  render() {

    login() {
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

    
    return (
      <div>1</div>
    );
  }
}
export default Login;