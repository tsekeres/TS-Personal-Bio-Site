import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  admin, projects, setProjects, technologies, setTechnologies, contacts, setContacts
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/contact"
          component={() => (
            <Contact contacts={contacts} setContacts={setContacts} />
          )}
        />
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
        <Route path="*" component={About} />
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
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
};

export default Routes;
