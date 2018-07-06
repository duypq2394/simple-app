import CourseApp from '../apps/course-app';
import * as React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { NotFound } from '../views/components/notfound';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

export const routes = [
  {
    path: '/',
    component: CourseApp,
  },
  // {
  //   path: '/course/login',
  //   component: CourseApp,
  // },  
  // {
  //   path: '/*',
  //   component: NotFound
  // }
];

export const routeServer = [
  { component: CourseApp,
    routes: [
      { path: '/course',
        component: CourseApp
      }
    ]
  }
];

export const createClientApp = (store) => {

  return (
      <Provider store={store}>
        <BrowserRouter>
        {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
  );
};

// https://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/

export const createServerApp = (req, context, store) => {

  return (
      <Provider store={store}>
        <StaticRouter location={req.baseUrl} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
  );
};
