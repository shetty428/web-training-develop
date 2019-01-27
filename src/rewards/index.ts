import RewardsContainer from './RewardsContainer';

d3.registerExtension({
  // Sets up the routes associated with our Rewards Module
  getRouteConfig() {
    return [
      {
        path: '/rewards', // Route that will be create the component
        permission: 'authenticated', // Permission on whether this route is accessible
        component: RewardsContainer, // Component to render on this route
        childRoutes: [] // Child routes of this route that will have their own components; Should be used within the context of a sub navigation
      }
    ];
  },
  // Sets up the items to be added to the navigation
  getNavConfig() {
    return [
      {
        title: 'Rewards', // Name shown
        href: 'rewards', // Route in which is used when clicked
        role: 'authenticated', // Permission associated with it
        position: 9, // Make it the last item
        root: true, // We are a top level item
        subitems: [] // If there were subnavigation items, they would go here
      }
    ];
  }
});
