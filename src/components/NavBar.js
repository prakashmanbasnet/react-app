import React from 'react'

export default function NavBar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode.color} bg-${props.mode.color}`}>
                <a className="navbar-brand" href='/'>Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href='/'>About <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/'>Contact</a>
                        </li>
                    </ul>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" onClick={props.toggleBtnRed}  className="custom-control-input" id="customSwitch1" />
                        <label className={`custom-control-label text-${props.mode.color==='light'?'dark':'light'}`} htmlFor="customSwitch1">{props.mode.btnText1} red mode</label>
                    </div>
                    <div className="custom-control custom-switch mx-2">
                        <input type="checkbox" onClick={props.toggleBtnDark} className="custom-control-input" id="customSwitch3" />
                        <label className={`custom-control-label text-${props.mode.color==='light'?'dark':'light'}`} htmlFor="customSwitch3">{props.mode.btnText} dark mode</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}
