import React, {Component} from 'react'
import LandingPage from '../components/LandingPage'

class Main extends Component
{
  state = {access: 'landing', email: '', password: '', name: ''}
  constructor()
  {
    super()
    console.log(this.props);
  }
  render()
  {
      const {access, email, password, name} = this.state
      return(<div>{access == 'landing' ? <LandingPage /> : (access == 'login' ? (<div>Cyber</div>) : (<p>Monday</p>))}</div>)
  }
}

export default Main
