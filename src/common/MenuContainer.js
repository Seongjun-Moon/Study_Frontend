import React, { Component } from "react";
import MovieChart from '../movie/MovieChart';
import axios from "axios";
import config from "../config"

class MenuContainer extends Component {

  componentDidMount() {
    if(this.state.loginState === false){
      this.setState({
        loginText : '로그아웃'
      })
    }else{
      this.setState({
        loginText : '로그인'
      })
    }
  }
  state = {
    memId : "",
    memPw : "",
    loginText : "로그인",
    loginState : false
  }
  login =()=>{
    const send_param = {
      memId: this.memId.value,
      memPw: this.memPw.value,
    };
    axios.post(config.url+"/member/login", send_param).then((res) => {
      if (res.data.resultCd === "0000") {
        alert(res.data.resultMsg);
        this.setState({
          loginText: '로그아웃',
          loginState : true
        });
      } else {
        alert(res.data.resultMsg);
      }
    });
  }

  join(){
    alert("회원가입")
    axios.post("http://localhost:7777/member/login").then((res) => {

    });
  }

  render() {
    return (
      <div>
        <button onClick={this.join}> 회원가입 </button>
        <button onClick={this.login} > {this.state.loginText}  </button>
        <input ref={(ref) => (this.memId = ref)} ></input>
        <input ref={(ref) => (this.memPw = ref)} ></input>
        <MovieChart></MovieChart>
      </div>
    );
  }
}
export default MenuContainer;