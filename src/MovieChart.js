import React, { Component } from "react";
import axios from "axios";

class MovieChart extends Component {

  state = {movie:[{image:'', name:''}] }

  movieSearch = (res) => {
    axios.post("http://localhost:7777/movieSearch/search" ).then((res) => {
      //axios.post("http://192.168.35.163:7777/movieSearch/search" ).then((res) => {
      if (res.data) {
        this.setState({
          movie: res.data
        })
        alert(this.state.movie.img_data[0].image_url)

        //const array = [{img : res.data.img_data[0].image_url, name: res.data.movie_data[0].movie}]

      } else {
        alert("false");
      }
    });
  }
  render() {
    
    const movieList = this.state.movie.map((movie,index) => (<li key={index}> <img src={movie.img_data.image_url} height="500px" alt=""/> <br/> <strong>{movie.movie_data.movie}</strong></li>))

    return (
      <div>
        <div>
          <h1>영화 검색 크롤링</h1>
          <div>
            <button onClick={this.movieSearch}>영화 찾기</button>
          </div>
            <br/>
            {movieList}
        </div>
      </div>
    );
  }
}
export default MovieChart;