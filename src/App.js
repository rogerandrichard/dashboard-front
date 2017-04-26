import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './store'
// -------------------------------------
import Admin from './routes/Admin'
import BookJob from './routes/bookJob'
import MyJobs from './routes/myJobs'
import W1 from './routes/W1'
import MyProfile from './routes/myProfile'
import './App.css'
import '../node_modules/react-datetime/css/react-datetime.css'

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          {/* <Route exact path='/' component={BookJob}/> */}
          <Route exact path='/clients/:id' component={BookJob}/>
          {/* <Route path='/bookJob/w1' component={W1}/> */}
          <Route path='/clients/:id/myJobs' component={MyJobs}/>
          <Route path='/clients/:id/myProfile' component={MyProfile}/>
          <Route path='/clients/:id/admin' component={Admin}/>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;

// const BeerList = ({ beers }) => (
//   <ul>
//     { beers.map((beer) => <Beer key={beer.id} {...beer} />) }
//   </ul>
// )
//
// const Beer = (props) => {
//   return (
//     <li>{props.name}</li>
//   )
// }

// class App extends Component {
//
//   state = { beers: [], user: null }
//
//   handleSubmitMessage = (cred) => {
//     console.log("login submitting...");
//     console.log("Cred:", cred);
//     fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//        'Accept': 'application/json',
//         'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({
//          username: cred.username,
//          password: cred.password
//       })
//     })
//     .then(resp => resp.json())
//     .then(({ user }) => this.setState({user: user.name}))
//   }
//
//   componentDidMount() {
//     fetch('http://localhost:3000/beers')
//     .then(resp => resp.json())
//     .then(({ beers }) => this.setState({ beers }))
//   }

//   render() {
//     return (
//       <div className="App">
//         {/* <nav>Login is {this.state.user}
//           <Login onSubmitMessage={this.handleSubmitMessage}/> */}
//         {/* </nav> */}
//         {/* <h1>Beers</h1> */}
//         {/* <BeerList beers={this.state.beers} /> */}
//         <Links/>
//       </div>
//     );
//   }
// }
