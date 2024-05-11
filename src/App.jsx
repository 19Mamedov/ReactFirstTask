import React from 'react'

function App() {
  return (
     <>
      <nav>
        <div className='logo'>
          <img src="https://templatemo.com/templates/templatemo_574_mexant/assets/images/logo.png" alt="" />
        </div>
        <div className='navR'>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Pages</li>
            <li>Testimonials</li>
          </ul>
          <button className='buttonAqua'>Contact Support</button>
        </div>
      </nav>
      <header>
        <div className='headerT'>
          <h1>
            <span>Digital</span>  Currency for you & Best <span>Crypto</span> Tips
          </h1>
        </div>
        <div className='xett'></div>
        <div className='headerB'>
          <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any purpose.</p>
          <button className='buttonAqua'>Discover More</button ><button className='buttonOrange'>Contact Us</button>
        </div>
        
      </header>
      <section>
        <div>
        <div className='secT'>
          <h3>TESTIMONIALS</h3>
          <h1>What They Say</h1>
        </div>
       <div className='center'>
          <div className='secb'>
              <div className='secL'>
                <div>
                <p className='grey'>“Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”</p>
                </div>
                <div>
                  <h3 className='has1' >David Memmedov</h3>
                  <h3  className='has2'>CEO of Mexant</h3>
                </div>
              </div>
              <div className='secR'>
                <img className='img' src="https://templatemo.com/templates/templatemo_574_mexant/assets/images/testimonials-01.jpg" alt="" />
              </div>
          </div>
       </div>
        </div>
      </section>
     </>
  
  )
}

export default App
