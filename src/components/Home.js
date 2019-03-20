import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <section id="intro" className="wrapper style1 fullscreen fade-up">
				<div className="inner">
					<h1>Structure Processing Property</h1>
					<p>
						Welcome to our Premier Materials Science Group headed by <i>Doctor</i> <b>Shibayan Roy</b>. <br/>
						Our work ranges from determining structure of various materials to studying<br/>
						mechanical and physical properties, microstructural characteristics <br/>
						and crystallogrphic texture.
					</p>
					<ul className="actions" id="intro-expand-button">
						<li><a href="#intro" className="button">Learn more</a></li>
					</ul>
					<div id="intro-expand">
						<p>
							Our primary research focus is corelating the macroslace properties of materials to <i>microstructural</i><br/>
							characteristics and <i>crystallogrphic</i> texture formed by tehrmal and mechanical processing. We usually<br/>
							work on <b>metal alloys</b> and <b>glass ceramics</b>. Although, there is always a scope of expanding our horizon.<br/>
							Feel free to contact us.
						</p>
						<ul className="actions">
							<li><a href="#three" className="button">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</section>
    )
  }
}

export default Home
