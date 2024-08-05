import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="" className='orbital' />
            <div className="left">
                <h1>AI CHAT</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsum sit modi veritatis rem esse ut.
                </h3>
                <Link to="/dashboard"></Link>
                <button>Get Started</button>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default Homepage