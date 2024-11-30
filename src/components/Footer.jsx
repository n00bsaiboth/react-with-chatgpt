import Link from './Link'
import Copyright from './Copyright'
import Contact from './Contact'
import Info from './Info'
import Social from './Social'

const Footer = () => {
    return (
      <div>
        <section>
          <footer>
            <div className='container'>
              <div className='row'>
                <Contact />
                <Social />
                <Info />
              </div>
              <div className='row'>
                <div className='col-12 col-xs-12 col-sm-12'>
                  <Copyright />
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    )
}

export default Footer