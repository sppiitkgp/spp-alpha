import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import WhoWeAre from './WhoWeAre'
import WhatWeDo from './WhatWeDo'
import GetInTouch from './GetInTouch'

class Content extends Component {
  render() {
    return (
      <Switch>
				<Route exact path='/' component={Home}></Route>
				<Route path='/one' component={WhoWeAre}></Route>
				<Route path='/two' component={WhatWeDo}></Route>
				<Route path='/three' component={GetInTouch}></Route>
			</Switch>
    )
  }
}

export default Content
