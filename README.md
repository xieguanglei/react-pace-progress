# React Pace Progress

React Pace Progress is a simple [pace]-style progressbar component.

![example](https://xieguanglei.github.io/react-pace-progress/resource/examle.gif)

## Install

The only way to use React-Pace-Progressbar is to install it from NPM.

```
$ npm install react-pace-progress --save
```

You need to import it and include in your own React build progress (using Webpack, e.g).

```
import Pace from 'react-pace-progress'
```

## Usage

Use `Pace` like any other react component. `Pace` renders a thin horizontal progressbar infinitely approaching 100%. It never reaches 100%.  

```
  // inside your react component
  
  load = ()=>{
    this.setState({isLoading: true});
    fetch().then(()=>{
      // deal with data fetched
      this.setState({isLoading: false})
    })
  };
  
  render(){
    return (
      <div>
        {this.state.isLoading ? <Pace color="#27ae60"/> : null}
        ... content
      </div>
    )
  }
```

## Props

Use props to custom Pace component.

- height: `number`, progressbar height in pixels.
- color: `string`, progressbar color.

[pace]: http://github.hubspot.com/pace/
