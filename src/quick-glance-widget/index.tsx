import React from 'react';
import { render } from 'react-dom';
import ThemeProvider from '@d3banking/web-sdk/components/ThemeProvider';
import QuickGlanceWidget from './QuickGlanceWidget';

d3.registerExtension({
  init({ eventService }, done) {
    eventService.addRouteListener('accounts', {
      domSelector: '.accounts-dashboard .account-widgets',
      onSuccess: (element: Element) => {
        // Create the element in which your react component will be rendered at
        const widgetEl = document.createElement('div');
        // Add the widget before the other widgets
        element.prepend(widgetEl);
        // Render our react component
        // We need to wrap in ThemeProvider to get access to theme since we are rendering outside the application
        render(
          <ThemeProvider>
            <QuickGlanceWidget />
          </ThemeProvider>,
          widgetEl
        );
      }
    });

    // Done needs to get called to tell the core we've been loaded
    done();
  }
});
