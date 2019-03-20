import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <section id="sidebar">
				<div className="inner">
					<nav>
						<ul>
							<li><Link to='/'>Welcome</Link></li>
							<li><Link to='/one'>Who we are</Link></li>
							<li><Link to='/two'>What we do</Link></li>
							<li><Link to='/three'>Get in touch</Link></li>
						</ul>
					</nav>
				</div>
			</section>
    )
  }
}

export default Sidebar
