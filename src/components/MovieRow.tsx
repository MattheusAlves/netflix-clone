import React, { Component } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import '../styles/MovieRow.css'

interface Props {
  title: string;
  items: Record<string, any>
}
interface State {
  scrollX: number
}
export default class MovieRow extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      scrollX: 0
    }
  }
  handleLeftArrow = () => {
    let x = this.state.scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    this.setState({ scrollX: x })
  }
  handleRightArrow = () => {
    let x = this.state.scrollX - Math.round(window.innerWidth / 2)
    let listW = this.props.items.results.length * 150
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    this.setState({ scrollX: x })
  }
  render() {
    const { title, items } = this.props
    return (
      <div className="movieRow">
        <h2>{title}</h2>
        <div className="movieRow--left" onClick={this.handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--right" onClick={this.handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--listarea">
          <div
            className="movieRow--list"
            style={{
              marginLeft: this.state.scrollX,
              width: items.results.length * 150
            }}
          >
            {items.results.length > 0 &&
              items.results.map(
                (item, key) =>
                  item.poster_path && (
                    <div key={key} className="movieRow--item">
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                        alt={item.original_title}
                      />
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    )
  }
}
