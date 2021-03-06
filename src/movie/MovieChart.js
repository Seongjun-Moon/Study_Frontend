import React, { Component } from "react";
import axios from "axios";
import config from "../config"

class MovieChart extends Component {
  state = { searchData: [] };

  componentDidMount() {

    axios.post(config.url+"/movie/search").then((res) => {
      if (res.data) {
        console.log(res.data);
        const searchResults = res.data.img_data;
        const searchResults2 = res.data.movie_data;
        const searchData2 = [];

        for (let i = 0; i < searchResults.length; i++) {
          searchData2.push(
            Object.assign(searchResults[i], searchResults2[i])
          );
        }
        console.log(searchData2);
        this.setState({
          searchData: searchData2,
        });
        console.log(this.state.searchData);

      } else {
        alert("false");
      }
    });
  }

  move(){
  }

  render() {
    const movieStyle = {
      display: "inline-block",
      padding: "30px"
    }
    const divStyle = {
      textAlign: 'center',
    }
    const headStyle = {
      padding: "30px"
    }
    const backColor = {
      backgroundColor : "#fdfcf0"
    }
    const movieList = this.state.searchData.map((searchData,index) => (<li key={index} style={movieStyle} > <img src={searchData.image_url} height="480px" alt=""/> <br/> <strong>{index+1}위 {searchData.movie}</strong></li>))
    return (
      <div style={backColor}>
        <div style={divStyle}>
          <img style = {headStyle} src="http://img.cgv.co.kr/R2014/images/title/h2_cultureplex.png" alt="CULTUREPLEX" ></img>
          <br />
          <p> {movieList} </p>
        </div>
      </div>
    );
  }
}
export default MovieChart;