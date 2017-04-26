import React from 'react'
import { Link } from 'react-router-dom'
import { Badge, Image, Label } from 'react-bootstrap'
import WhiteShark from '../images/WhiteShark.png'
import { connect } from 'react-redux'


const Navbar = (props) => {
  return (
    <div>
      <div className="wrapper">
        <nav id="navbar" className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div>
                  <Link to={`/clients/${props.id}`} className="navbar-brand">
                  <Image id="brand-image" src={ WhiteShark }></Image>
                  <h2 id="brand">White Shark</h2>
                  </Link>
                </div>
              </div>
              <Label id="currentClient" className="text-center">
                {props.current_client}
              </Label>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul id="nav-btns" className="nav navbar-nav navbar-right">
                <li>
                  <Link to={`/clients/${props.id}`}>
                    Book Jobs
                  </Link>
                </li>
                <li>
                  <Link to={`/clients/${props.id}/myJobs`}>
                    My Jobs
                  </Link>
                </li>
                <li>
                  <Link to={`/clients/${props.id}/myProfile`}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to={`/clients/${props.id}/admin`}>
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(Navbar)
