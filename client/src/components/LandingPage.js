import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

class LandingPage extends Component
{
  state = {access: '', email: '', password: '', name: ''}

  onClickState = (access) => {console.log(access); this.setState({access}); this.props.history.push('/login')}

  render()
  {
      const {access, email, password, name} = this.state
      return(<article>
        <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
          Este es el gestor de tareas para tu equipo, Helium.
        </h1>
        <h2 className="fw2 f4 lh-copy mt0 mb3">
          Aqui podras gestionar todos tus recursos de TI para una mejor y mas agile gestion.
        </h2>
        <p className="fw1 f5 mt0 mb3">
          Registrate ahora si aun no tienes tu cuenta.
        </p>
        <div>
          <Link to="/login" className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
            href="#" onClick={() => this.onClickState('login')}>
            Ingresar
          </Link>
          <Link to="/register" className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
            href="#" onClick={() => this.onClickState('register')}>
            Registrate
          </Link>
        </div>
      </article>)
  }
}

export default withRouter(LandingPage)
