import Link from "./Link"

const Info = () => {
    return (
      <div className='col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4'>
        <article>
            <div>
                <h3>More information</h3>
                <Link link='https://openinnovations.io' text='openinnovations.io' />
                <Link link='https://n00bsaiboth.github.io' text='n00bsaiboth [at] github.io' />
            </div>
        </article>
      </div>
    )
}

export default Info