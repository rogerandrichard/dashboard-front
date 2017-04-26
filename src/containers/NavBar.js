import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Count from '../components/Count'
import CountHeader from '../components/CountHeader'
import { fetchCount, increment, decrement } from '../actions/counter'


class NavBarContainer extends Component{

  componentDidMount(){

  }


  render(){
    return(
      <div>
        <button onClick={() => this.props.dispatch(push('/bookjob'))}>Book Job</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => this.props.dispatch(push('/myjobs'))}>My Jobs</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => this.props.dispatch(push('/myprofile'))}>My Profile</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => this.props.dispatch(push('/navbar'))}>Bact To Home</button>&nbsp;&nbsp;&nbsp;
      </div>

    )


  }








}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

export default connect(mapStateToProps)(NavBarContainer);
