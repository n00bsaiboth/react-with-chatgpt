import Link from "./Link"

const Contact = () => {
    return (
      <div className='col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4'>
        <article>
            <div>
              <h3>Contact</h3>
              <Link link='https://www.google.com/maps/place/21380+Karviainen/@60.6524113,22.4716348,13z/data=!4m6!3m5!1s0x468c0944a11c6713:0x2600b5523c18d7f1!8m2!3d60.6525975!4d22.5018337!16s%2Fg%2F1trtsz6r?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D' text='Karviainen - Aura' />
              <p><a href='tel: +358 41 701 6628' title='+358 41 701 6628'>+358 41 701 6628</a></p>
              <p><a href='mailto: jussi.jokinen [at] openinnovations.io' title='jussi.jokinen [at] openinnovations.io'>jussi.jokinen [at] openinnovations.io</a></p>
            </div>
        </article>
      </div>
    )
}

export default Contact
