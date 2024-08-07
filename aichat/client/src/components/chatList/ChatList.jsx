import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
    return (
        <div className="chatList">
            <span className='title'>DASHBOARD</span>
            <Link to="/dashboard">Create a new Chat</Link>
            <Link to="/">Explore AI Chat</Link>
            <Link to="/">Contact</Link>
            <hr />
            <span className="title">RECENT CHAT</span>
            <div className="list">
                <Link to="/">hi</Link>
                <Link to="/">hi</Link>
                <Link to="/">hi</Link>
                <Link to="/"></Link>
                <Link to="/"></Link>
                <Link to="/"></Link>
                <Link to="/"></Link>
                <Link to="/"></Link>

            </div>
            <hr />
            <div className="upgrade">
                <img src="/logo.png" alt="" />
                <div className="texts">
                    <span>Upgrade to AI Chat Pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList