
const Intro = () => {
    return (
      <div>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-xs-12 col-sm-12'>
                        <article>
                            <h2>React with ChatGPT</h2>
                            <p>How to use:</p>
                            <ul>
                                <li><p>First you need to create the API keys. You can do that here, <a href="https://platform.openai.com" title="platform.openai.com" target="_blank" rel="noreferrer noopener">platform.openai.com</a>.</p></li>
                                <li><p>From the same place, you might need to buy some tokens and or credits, so the API start to work (enables communication with the chatGPT, every query cost a small amount of money).</p></li>
                                <li><p>Create the .env file to document root, this is where you store the api key. The .env file looks like this, REACT_APP_OPENAI_API_KEY=your-api-key-here .</p></li>
                            </ul> 
                        </article>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
}

export default Intro