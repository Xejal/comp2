import React, { Component } from 'react'
import Address from './Address'
import Email from './Email'
import Name from './Name'
import PersonalInfo from './PersonalInfo'

export default class Profil extends Component {
  render() {
    return (
      <div>
        <Email/>
        <Name/>
        <Address/>
        <PersonalInfo/>
      </div>
    )
  }
}
