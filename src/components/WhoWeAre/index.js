import React, { Component } from 'react'
import { members } from './data'
class WhoWeAre extends Component {
  render() {
    const professors = members.professors.map((mem, idx) => {
      const con = mem.contact
      return (
        <section key={`${idx}`}>
          <div className='image'>
            <img src={require(`../../images/people/${mem.userId}.${mem.imageFormat}`)} alt={mem.userId} data-position="center center"></img>
          </div>
          <div className='content'>
            <div className='inner'>
              <h2>{mem.name}</h2>
              <h4>{mem.role}</h4>
              <h5>{mem.department}</h5>
              <p></p>
            </div>
            <ul className='actions'>
              {con.website ? <li><a href={con.website} target='_blank' rel='noopener noreferrer' className='button small'>Website</a></li> : null}
              {con.researcherId ? <li><a href={con.researcherId} target='_blank' rel='noopener noreferrer' className='button small'>Researcher ID</a></li> : null}
              {con.email ? con.email.map((e, id) => <li key={`${id}`}><a href={`mailto:${e}`} target='_top' className='button small'>Email</a></li>) : null}
              {con.phone ? con.phone.map((e, id) => <li key={`${id}`}><a href={`tel:${e}`} target='_top' className='button small'>Phone</a></li>) : null}
            </ul>
          </div>
        </section>
      )
    })
    const current = members.current.map((mem, idx) => {
      const con = mem.contact
      return (
        <section key={`${idx}`}>
          <div className='image'>
            <img src={require(`../../images/people/${mem.userId}.${mem.imageFormat}`)} alt={mem.userId} data-position="center center"></img>
          </div>
          <div className='content'>
            <div className='inner'>
              <h2>{mem.name}</h2>
              <h4>{mem.role} {mem.year}</h4>
              <p style={{'fontSize': '17px'}}>
                {mem.project ? <><b>Project </b>{mem.project}<br/></> : null}
                {mem.previousEducation ? <><b>Previous Education </b>{mem.previousEducation}<br/></> : null}
                {mem.workExperience ? <><b>Work Experience </b>{mem.workExperience}</> : null}
              </p>
              <ul className='actions'>
                {con.email ? con.email.map((e, id) => <li key={`${id}`}><a href={`mailto:${e}`} target='_top' className='button small'>Email</a></li>) : null}
              </ul>
            </div>
          </div>
        </section>
      )
    })
    const alumni = members.alumni.map((mem, idx) => {
      return (
        <section key={`${idx}`}>
          <div className='image'>
            <img src={require(`../../images/people/${mem.userId}.${mem.imageFormat}`)} alt={mem.userId} data-position="center center"></img>
          </div>
          <div className='content'>
            <div className='inner'>
              <h2>{mem.name}</h2>
              <h4>{mem.role} {mem.year}</h4>
              <p style={{'fontSize': '17px'}}>
                {mem.previousEducation ? <><b>Previous Education </b>{mem.previousEducation}<br/></> : null}
                {mem.currentStatus ? <><b>Current Status </b>{mem.currentStatus}</> : null}
              </p>
            </div>
          </div>
        </section>
      )
    })
    return (<section id="one" className="wrapper style2 spotlights">{professors}{current}{alumni}</section>)
  }
}
export default WhoWeAre