import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from './Main'

class App extends Component
{
  render()
  {
      return(<div className="prc-body fth-bkgclr-greendark">
          <Header />
          <div className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-blue dark-green mb5">
            <Switch>
                <Route exac path="/" component={Main} />
                <Route exac path="/login" component={Main} />
                <Route exac path="/register" component={Main} />
            </Switch>
          </div>
          <Footer />
        </div>)
  }
}

export default App
