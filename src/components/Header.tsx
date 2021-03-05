import React, { Component } from 'react'
import '../styles/Header.css'

interface Props {
  black: boolean
}
export default class Header extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { black } = this.props
    return (
      <div>
        <header className={black ? 'black' : ''}>
          <div className="header--logo">
            <a href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="Netflix"
              />
            </a>
          </div>
          <div className="header--user">
            <a href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Usuário"
              />
            </a>
          </div>
        </header>
      </div>
    )
  }
}
