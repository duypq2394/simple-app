import { Express, Router } from "express";
import { renderToString } from "react-dom/server";
import { matchRoutes } from "react-router-config";
import PassportUtility from "../middlewares/passport/passport-utility";
import { configureStore } from "../client/stores/course-store";
import { createServerApp, routes } from "../client/routes/course-route";

let router = Router();
let jsDate: number = 0;
const passport = require("passport");

module.exports = function(app: Express) {
  app.use("/", router);
};
router.get('/login',  (req: any, res, next) => {
  res.render('login2', { message: req.flash('error') });
});


router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })
);

router.get("/logout", (req: any, res) => {
  req.logout();
  res.redirect("/");
});

router.get("*", (req: any, res) => {
  const store = configureStore();
  const branch = matchRoutes(routes, req.baseUrl + req.url);
  const protocol = req.protocol;
  let host = req.headers.host;
  const promises = branch.map(({ route }) => {
    let getInitialProps = route.component.getInitialProps;
    return getInitialProps instanceof Function
      ? getInitialProps(store, protocol, host)
      : Promise.resolve(undefined);
  });
  return Promise.all(promises)
    .then(data => {
      let context: any = {};
      const content = renderToString(createServerApp(req, context, store));

      if (context.status === 404) {
        res.status(404);
      } else if (context.status === 302) {
        return res.redirect(302, context.url);
      }

      res.render("course", {
        title: "EJS Server Rendering Title",
        markup: content,
        initialState: JSON.stringify(store.getState()),
 
      });
    })
    .catch(err => {
      console.log("caught", err.message);
    });
});

//  function isAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/course/login");
// }


