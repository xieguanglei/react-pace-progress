import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pace extends Component {

  static propTypes = {
    height: PropTypes.number,
    color: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    className: PropTypes.string
  };

  state = {
    width: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        width: this.state.width + (1 - this.state.width) * 0.2
      })
    }, 500 + 200 * Math.random());
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getStyles = () => {
    const styles = {
      main: {
        height: this.props.height || 10,
        backgroundColor: this.props.color || '#2c3e50',
        transition: 'width 0.5s',
        width: Math.floor(this.state.width * 100) + '%'
      },
      container: {
        position: 'absolute',
        width: '100%'
      }
    };

    if (this.props.style) {
      styles.main = Object.assign({}, this.props.style, styles.main);
    }

    return styles;
  };

  render() {
    const styles = this.getStyles();

    const {id, className} = this.props;

    return (
      <div style={styles.container}>
        <div {...{id, className}} style={styles.main}/>
      </div>
    );
  }
}

export default Pace;
