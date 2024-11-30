import Link from "./Link"

const Social = () => {
    return (
      <div className='col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4'>
        <article>
            <div>
                <h3>Social media</h3>
                <Link link='https://linkedin.com/in/jussi-k-jokinen' text='LinkedIn' />
                <Link link='https://github.com/n00bsaiboth' text='GitHub' />
            </div>
        </article>
      </div>
    )
}

export default Social