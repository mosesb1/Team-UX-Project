import "./Footer.css"

export default function Footer(props) {
    return (
        <div className="footer">
            <button>
                Settings 
            </button>
            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                Support 
            </button>
            <button>
                &copy;2022 
            </button>
        </div>
    )
}