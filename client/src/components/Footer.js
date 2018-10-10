import React, {Component} from 'react'

class Footer extends Component
{
  render()
  {
      return(<footer className="pv4 ph3 ph5-m ph6-l light-gray frd-bkgclr-dark">
        <small className="f6 db tc">© 2018 <b className="ttu">Helium es una empresa de Adimen Group</b>., Todos los derechos reservados</small>
        <div className="tc mt3">
          Contacto <a href="mailto:cavila@adimen.cl" title="Contacto" className="f6 dib ph2 link trd-txtclr-brown dim">cavila@adimen.cl</a>
          Telefono <a href="#" title="Numero" className="f6 dib ph2 link trd-txtclr-brown dim">(+56) (2) 2222 0974</a>
          Website <a href="http://www.adimen.cl"  title="web" className="f6 dib ph2 link trd-txtclr-brown dim">www.Adimen.cl</a>
        </div>
      </footer>)
  }
}

export default Footer
