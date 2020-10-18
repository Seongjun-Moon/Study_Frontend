import React, { Component } from "react";
import MovieChart from '../movie/MovieChart';

class MenuContainer extends Component {

  login(){
    alert("로그인")
  }

  render() {
    return (
      <div>
        <button> 회원가입 </button>
        <button onClick={this.login}> 로그인 </button>
        <MovieChart></MovieChart>
      </div>
    );
  }
}
export default MenuContainer;