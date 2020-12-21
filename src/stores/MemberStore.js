import { observable, action, computed } from 'mobx'
import axios from "axios";
import config from "../config"

class MemberStore {

  constructor(root) {
    this.root = root;
  }

  @observable memId
  @observable memPw 
  @observable loginText = '로그인'
  @observable loginState = false

  @action login = (o) => {
    console.log(o)
    this.loginText = '로그아웃'
    this.loginState = true
  }

}

export default new MemberStore();