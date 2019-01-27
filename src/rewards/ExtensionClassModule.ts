import RewardsContainer from './RewardsContainer';

const Extension = {
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
  },

  getSagas() {
    return [];
  },

  getReducers() {
    return [];
  }
};

export default Extension;
