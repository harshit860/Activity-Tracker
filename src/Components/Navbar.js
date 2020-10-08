import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login'
import { Login } from './../Redux/Actions/login'
import { connect } from 'react-redux';
import { persist } from '../Redux/Actions/persist';
import { LogoutAction } from '../Redux/Actions/logout';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfoModal: false,
      userObject: {},
      loading: true
    }
  }
  actionCalled = (response) => {
    console.log(response)
    this.props.login(response.profileObj)
  }

  showProfileInfo = () => {
    this.setState({
      showInfoModal: !this.state.showInfoModal
    })
  }


  componentDidUpdate = () => {
    console.log(this.props.user)
    console.log("inside did update")
  }
  render() {

    return (
      <div className="col-xl-12 justify-content-around d-flex shadow-sm bg-dark" style={{ padding: 10 }}>
        <Link to="/"><button className="border border-primary btn bg-dark text-white">Track It!</button></Link>
        <span >
          {this.props.loggedIn ? (
            <React.Fragment>
              <img className="rounded-circle shadow border border-primary" onClick={this.showProfileInfo} src={this.props.avatar.imageUrl} height="70" width="70" />
              {this.state.showInfoModal ?
                (
                  <div className="border rounded p-2" style={{ position: "fixed", zIndex: 1, backgroundColor: "white", right: 0 }}>
                    <p>{this.props.user.name}</p>
                    <>
                      <button className="btn btn-danger " onClick={this.props.logout}>Logout</button>
                    </>
                  </div>
                ) :
                (<></>)}

            </React.Fragment>
          ) : (
              // <GoogleLogin
              //   theme="dark"
              //   clientId={process.env.REACT_APP_AUTH_KEY}
              //   buttonText="Login "
              //   onSuccess={this.actionCalled}
              //   onFailure={this.actionCalled}
              //   cookiePolicy={'single_host_origin'}
              //   style={{ padding: 10 }}
              // />
              <>
              </>
            )}

        </span>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state, 'reducer se')
  return {
    loggedIn: state.UserLogin,
    avatar: state.userObject,
    user: state.userObject
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (val) => dispatch(Login(val)),
    persist1: () => dispatch(persist()),
    logout: () => dispatch(LogoutAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
