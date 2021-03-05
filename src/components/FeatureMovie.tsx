import React, { Component } from 'react'
import '../styles/Featured.css'

interface Props {
  item: Record<string, any>
}
export default class FeatureMovie extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  firstDate = new Date(this.props.item.first_air_date)
  genres = []

  render() {
    const { item } = this.props
    for (let i in item.genres) {
      this.genres.push(item.genres[i].name)
    }
    console.log(item)
    return (
      <section
        className="featured"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}
      >
        <div className="featured--vertical">
          <div className="featured--horizontal">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--info">
              <div className="featured--points">{item.vote_average} pontos</div>
              <div className="featured--year">
                {this.firstDate.getFullYear()}
              </div>
              <div className="featured--seasons">
                {item.number_of_seasons} temporada
                {item.number_of_seasons !== 1 && 's'}
              </div>
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="featured--buttons">
              <a href="#" className="featured--watchbutton">
                ► Assistir
              </a>
              <a href="#" className="featured--mylistbutton">
                + Minha Lista
              </a>
            </div>
            <div className="featured--genres">
              <strong>Gêneros:</strong>
              {this.genres.join(', ')}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
