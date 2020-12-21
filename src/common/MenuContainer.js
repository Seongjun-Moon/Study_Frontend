import React, { Component } from "react";
import MovieChart from '../movie/MovieChart';
import axios from "axios";
import config from "../config"
import { observable, action} from "mobx";
import { observer, inject } from "mobx-react";

@inject("memberStore")
@observer
class MenuContainer extends Component {

  state = {
    loginText : '로그인',
    memId : '',
    memPw : ''
  }
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

  render() {
    //const { memberStore } = this.props

    return (
      <div id="root">
        <button onClick={() => {this.login()}}> {this.state.loginText} </button>
        <input name="memId" placeholder ="ID" ref={(ref) => (this.memId = ref)} />
        <input name="memPw" placeholder ="PW" ref={(ref) => (this.memPw = ref)} />
        <MovieChart></MovieChart>
      </div>
    );
  }
}
export default MenuContainer;