import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDark: false}

  ThemeChanger = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const mode = isDark ? 'dark-mode' : 'light-mode'
    const name = isDark ? 'Light Mode' : 'Dark Mode'
    return (
      <div className={`container ${mode}`}>
        <h1 className="heading">Click To Change Mode</h1>
        <button type="button" className="btn" onClick={this.ThemeChanger}>
          {name}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
