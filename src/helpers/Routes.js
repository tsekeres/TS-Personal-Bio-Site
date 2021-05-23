// import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const AuthedRoute = ({ component: Component, admin, ...rest }) => {
//   const routeChecker = (taco) =>
//     admin ? (
//       <Component {...taco} user={user} />
//     ) : (
//       <Redirect to={{ pathname: '/', state: { from: taco.location } }} />
//     );
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

// AuthedRoute.propTypes = {
//   component: PropTypes.func,
//   admin: PropTypes.exact,
// };

// function Routes({ admin }) {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route
//           exact
//           path="/"
//           user={user}
//           component={() => (
//             <ViewName user={user} />
//           )}
//         />
//         <PrivateRoute
//           exact
//           path="/"
//           user={user}
//           component={() => <ViewNAme user={user} />}
//         />
//         <Route path="*" component={Home} />
//       </Switch>
//     </div>
//   );
// }

// Routes.propTypes = {
//   user: PropTypes.any,
// };

// export default Routes;
