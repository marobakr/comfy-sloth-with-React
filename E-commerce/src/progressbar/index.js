import React from 'react'

class Progress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.progressBar)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.progressBar)
  }

  progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop
    const heightWin =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scroll = `${(scrollTotal / heightWin) * 100}%`

    this.setState({
      scroll: scroll,
    })
  }

  render() {
    const progressMainWrapper = {
      background: 'rgba(255, 255, 255, 0.14)',
      height: '4px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 101,
      width: '100%',
    }

    const progressMainStyle = {
      height: '5px',
      background: '#ab7a5f',
      width: this.state.scroll,
    }

    return (
      <div className='progress-bar' style={progressMainWrapper}>
        <div style={progressMainStyle} />
      </div>
    )
  }
}

export default Progress
