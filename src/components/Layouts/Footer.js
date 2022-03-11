import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className='mt-5 shadow-lg'>
      <div className="container-fluid">
        {/* <!-- hitwebcounter Code START --> */}
        <a href="https://www.hitwebcounter.com" target="_blank">
          <img src="https://hitwebcounter.com/counter/counter.php?page=7951910&style=0024&nbdigits=5&type=ip&initCount=0" title="Free Counter" alt="web counter" border="0"/></a>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstzWgcXdCFrkskpHFjxKVcDghWFHwPxkWrntSwFzxTNQNwZWtCbNNhJCGXvdFtLrNKZxFzQ'><i className="social-icon fas fa-envelope"></i></a>
        
        <p>© Copyright 2022 Vidkarya</p>
      </div>
    </footer>
  )
}

export default Footer;