import React from 'react'

const NewsLetter = () => {
  return (
    <section>
        <div className="container">
            <div className="newsletter-section">
                <div className='newssletter-content'>
                    <img src={require(`../assets/svg/newsletter.svg`).default} alt='newsletter' />
                    <h3>Subscribe to our newsletter</h3>
                    <p>Get 10% discount</p>
                </div>
                <form className='newsletter-email'>
                    <input type="email" placeholder='Enter Your Email...' />
                    <button><img src={require(`../assets/svg/newsletter-submit-btn.svg`).default} alt="submit" /></button>
                </form>
            </div>
        </div>

    </section>
  )
}

export default NewsLetter