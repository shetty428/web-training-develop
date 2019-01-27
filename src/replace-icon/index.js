d3.registerExtension({
  init({ eventService }, done) {
    eventService.addRouteListener('accounts', {
      domSelector: '.accounts-dashboard .transfer-payment-widget .icon-badge',
      onSuccess: (element) => {
        // Remove the icon from the transfer-payment-widget
        element.removeChild(element.querySelector('svg'));
      }
    });

    // Done needs to get called to tell the core we've been loaded
    done();
  }
});
