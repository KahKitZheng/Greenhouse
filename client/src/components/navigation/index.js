import React from "react";
import * as ROUTES from "utils/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

/* Views */
import Dashboard from "components/dashboard";
import Weather from "components/weather";
import PlantSearch from "components/plant-search";

/* Icons */
import HomeIcon from "icons/HomeIcon";
import WeatherIcon from "icons/WeatherIcon";
import PlantIcon from "icons/PlantIcon";

const Navigation = () => {
  return (
    <Router>
      <div className="flex flex-col-reverse h-full w-full bg-gray-200 lg:flex-row ">
        <div className="fixed lg:relative w-full bg-gray-100 rounded-t shadow-2xl-top lg:p-4 lg:shadow-lg lg:w-24 lg:h-full">
          <p className="hidden lg:block font-black text-gray-800 text-4xl text-center mb-4">
            GH
          </p>
          <ul className="grid grid-cols-3 lg:grid-cols-none lg:grid-rows-3 lg:gap-2">
            <li className="text-sm">
              <NavLink
                exact
                to={ROUTES.DASHBOARD}
                className="flex flex-col items-center justify-center text-gray-500 py-2 hover:text-gray-800"
                activeClassName="text-gray-800"
              >
                <HomeIcon />
                <span className="mt-1 lg:text-xs">Dashboard</span>
              </NavLink>
            </li>
            <li className="text-sm">
              <NavLink
                exact
                to={ROUTES.WEATHER}
                className="flex flex-col items-center justify-center text-gray-500 py-2 hover:text-gray-800"
                activeClassName="text-gray-800"
              >
                <WeatherIcon />
                <span className="mt-1 lg:text-xs">Weather</span>
              </NavLink>
            </li>
            <li className="text-sm">
              <NavLink
                exact
                to={ROUTES.PLANTS}
                className="flex flex-col items-center justify-center text-gray-500 py-2 hover:text-gray-800"
                activeClassName="text-gray-800"
              >
                <PlantIcon />
                <span className="mt-1 lg:text-xs">Plants</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path={ROUTES.DASHBOARD}>
            <Dashboard />
          </Route>
          <Route exact path={ROUTES.WEATHER}>
            <Weather />
          </Route>
          <Route exact path={ROUTES.PLANTS}>
            <PlantSearch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
