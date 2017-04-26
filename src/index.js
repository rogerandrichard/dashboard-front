import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



// ---------
//
//
// import Home from './routes/Home'
// import Profile from './routes/Profile'
//
//
// const App = (props) => {
//   return {
//     <Router>
//         <Route path='/' component={Home}/>
//         <Route path='/profile' component={profile}/>
//         <Route path='/inbox' component={inbox}/>
//     </Router>
//   }
// }
//
// export default App
//
// -------
// import Header from './components/Header'
// import JumboImage from './components/JumboImage'
//
// class Home extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         productList: []
//     }
//   }
//
//   componentDidMount() {
//     // make call to API to get data
//     this.setState({})
//   }
//
//
//   render() {
//     return (
//       <div>
//         <Header/>
//         <JumboImage productList={this.state.productList}/>
//         <ProductSales/>
//         <Footer/>
//       </div>
//     )
//   }
//
// }
//
//
// export default Home
