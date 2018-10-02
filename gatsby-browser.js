exports.onRouteUpdate = ({ location }) => {
  console.log("new pathname", location.pathname);

  // Track pageview with google analytics
  //   window.ga(`set`, `page`, location.pathname + location.search + location.hash);
  //   window.ga(`send`, `pageview`);
};
