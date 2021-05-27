import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Projects from '../views/Projects';
import Technologies from '../views/Technologies';
import UpdateProjects from '../views/UpdateProjects';
import UpdateTechnologies from '../views/UpdateTechnologies';

const AuthedRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = (taco) => (admin
    ? (<Component {...taco} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

AuthedRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any,
};

function Routes({
  admin, projects, setProjects, technologies, setTechnologies
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/projects"
          component={() => (
            <Projects projects={projects} setProjects={setProjects} />
          )}
        />
        <Route
          exact
          path="/technologies"
          component={() => (
            <Technologies
              technologies={technologies}
              setTechnologies={setTechnologies}
            />
          )}
        />
        <AuthedRoute
          exact
          path="/projects-update"
          component={() => (
            <UpdateProjects projects={projects} setProjects={setProjects} />
          )}
          admin={admin}
        />
        <AuthedRoute
          exact
          path="/technologies-update"
          admin={admin}
          component={() => (
            <UpdateTechnologies
              technologies={technologies}
              setTechnologies={setTechnologies}
            />
          )}
        />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  technologies: PropTypes.array,
  setTechnologies: PropTypes.func,
};

export default Routes;
