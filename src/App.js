import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
			<div>
				<Sidebar />
				<div id='wrapper'>
					<Content />
				</div>
			</div>
    )
  }
}

export default App
