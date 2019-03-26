const React = require("react");
const Layout = require("./src/components/layout.js").default;

// exports.onRouteUpdate = ({ location }) => {
//   console.log("new pathname", location.pathname);

//   // Track pageview with google analytics
//   //   window.ga(`set`, `page`, location.pathname + location.search + location.hash);
//   //   window.ga(`send`, `pageview`);
// };

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  //console.log(props);
  console.log(props);
  return <Layout {...props}>{element}</Layout>;
};
