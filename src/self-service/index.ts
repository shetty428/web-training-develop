import SelfServiceContainer from './SelfServiceContainer';

d3.registerExtension({
  // Overriding the self service module with our own
  getRouteConfig() {
    return [
      {
        path: '/self-service', // Route that will be create the component
        permission: 'self-service.read', // Permission on whether this route is accessible
        component: SelfServiceContainer, // Component to render on this route
        childRoutes: [] // Child routes of this route that will have their own components; Should be used within the context of a sub navigation
      }
    ];
  }
});
