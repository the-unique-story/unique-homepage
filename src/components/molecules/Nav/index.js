//** Standard Frameworks */
import * as React from 'react'
//** Extended Standard Frameworks */
import classnames from 'classnames/bind'

/**
 * General Navbar Component
 */
class Nav extends React.Component {

    //** Combine multiple values for className */
    classProps = classnames(
        "navbar",
        "navbar-expand-lg",
        "fixed-top",
        "scrolling-navbar",
        "navbar-dark",
        this.props.className,
        "text-white",
        "z-depth-0"
    )

    render(){
        return (
        <nav className={this.classProps}>
            <div className="container">
                <a className="navbar-brand sscroll" href="#home"><strong><img src={this.props.logo} alt="Pharmaziegasse Logo"/></strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {this.props.children}
                </div>
            </div>
        </nav>
    )
    }
    
}

export default Nav;
