import React, { Component } from 'react';
import Movie from './Movie';

class MovieApp extends Component {

  componentWillMount() {
    console.log('will mount')
  }

  state = {}
  componentDidMount() {
    console.log('did mount')
    this._getMovies();
    //lifeCycle안에서 직접 코딩하는 짓을 하지 말자. 함수로 빼서 호출
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({ // await가 붙어있는 위가 끝나지 전까진 실행되지않음.
      movies // 이렇게 하나만 쓰면 키값이 저걸로 들어가고 값이 변수로 들어감.
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      )
    })
    return movies
  }

  render() {
    // Render : componentWillMount() -> render() -> componentDidMount()
    // Update compoenntwillReceiveProps() => shouldComponentUpdate()[true일떄 진행] => comopnentWillUpdate()[여기에 loading을 숨기면됨. 엄데이트 되는 중이니까.] -> render() => componentDidUpdate()
    // sould -> 옛날 props와 지금 props가 바뀌면 실행 바뀔시 willUpdate실행
    console.log('render')
    const { movies } = this.state
    return (
      <>
        {/* {this.state.greeting} */}
        <div className={movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : 'Loading..'}
        </div>
      </>
    )
  }
}

export default MovieApp;