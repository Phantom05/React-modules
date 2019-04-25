import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component{
//   render(){
//     const {title, poster} = this.props;
//     return (
//       <div>
//         <h2>{title}</h2>
//         <MoviePoster poster={this.props.poster} />
//       </div>
//     );
//   }
// }

const Movie = ({ title, poster, genres, synopsis }) => {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h2>{title}</h2>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  )
}

const MoviePoster = ({ poster, alt }) => {
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}

const MovieGenre = ({ genre }) => {
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}
export default Movie;