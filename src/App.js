import React from 'react';
// import { connect } from 'react-redux';
// import store from './redux/store';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

// function App() {
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);
//   //   fetch('http://localhost:3000/db.json')
//   //     .then((res) => res.json())
//   //     .then((json) => {
//   //       setPizzas(json.pizzas);
//   //     });
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/" render={() => <Home items={pizzas} />} exact />
//         <Route path="/cart" component={Cart} exact />
//       </div>
//     </div>
//   );
// }

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />{' '}
//         <div className="content">
//           <Route
//             path="/"
//             render={() => <Home items={this.props.items} />}
//             exact
//           />
//           <Route path="/cart" component={Cart} exact />{' '}
//         </div>{' '}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
