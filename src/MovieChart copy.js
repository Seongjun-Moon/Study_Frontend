import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class MovieChart extends Component {

  test(){
    alert("test2")
  }

  movieSearch(){
    axios.post("http://localhost:7777/movieSearch/search" ).then((res) => {
      //axios.post("http://192.168.35.163:7777/movieSearch/search" ).then((res) => {
      if (res.data) {

        const array = [{img : res.data.img_data[0].image_url, name: res.data.movie_data[0].movie}]
        
        const temp = array.map((item, index) => {
          return( <li key={index}> <img src={item.img} height="500px" alt=""/> <br/> <strong>{item.name}</strong></li> )
        })

        ReactDOM.render(<ol>{temp}</ol>, document.getElementById("movie"))
        
      } else {
        alert("false");
      }
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1>영화 검색 크롤링</h1>
          <div>
            <button onClick={this.movieSearch}>영화 찾기</button>
          </div>
          <br/>
          <div id="movie"></div>
        </div>
      </div>
    );
  }
}
export default MovieChart;