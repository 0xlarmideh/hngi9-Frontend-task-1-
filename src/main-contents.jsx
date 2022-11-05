import { Link } from 'react-router-dom'
import Footer from './components/footer.jsx'
export default function MainContents() {
  return (
    <>
      <main>
        <div className="main-contents">
          <div className="profile-section">
            <img id="profile__img" src="/avi.jpg"></img>
            <div id="profile__name">Abdulhameed Busari</div>
            <div id="slack">larmideh</div>
          </div>
          <div className="links-section">
            <a className="links" id="twitter" href="https://twitter.com/0xlarmideh">Twitter Link</a>
            <a className="links" id="btn__zuri" href="https://training.zuri.team/">Zuri Team</a>
            <a className="links" id="books" href="http://books.zuri.team/">Zuri Books</a>
            <a className="links" id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<0x>">Python Books</a>
            <a className="links" id="pitch" href="https://background.zuri.team">Background Check for Coders</a>
            <a className="links" id="book__design" href="https://books.zuri.team/design-rules">Design Books</a>
            <Link className="links" id="contact" to="./contact">Contact me</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

