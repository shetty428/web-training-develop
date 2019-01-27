import React from 'react';
import { render } from 'react-dom';
import ThemeProvider from '@d3banking/web-sdk/components/ThemeProvider';
import AccountBadge from './AccountBadge';

d3.registerExtension({
  init({ eventService }, done) {
    eventService.addRouteListener('accounts', {
      domSelector: '.accounts-dashboard',
      onSuccess: () => {
        // We want to replace all account badges with our new ones
        const badgeList = document.querySelectorAll('.accounts-dashboard .badge.primary');
        // Render our react component
        // We need to wrap in ThemeProvider to get access to theme since we are rendering outside the application
        badgeList.forEach(node =>
          render(
            <ThemeProvider>
              <AccountBadge text={node.textContent} />
            </ThemeProvider>,
            node.parentNode
          )
        );
      }
    });

    // Done needs to get called to tell the core we've been loaded
    done();
  }
});
