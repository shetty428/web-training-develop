# training-web UI Extensions

## Installing Libraries

Before you can run this application you will need to install node (nodejs.org).
Once node is installed then run the following command to install needed libraries

    yarn

## Running Extensions

To run for development:

    yarn start

This will start all extensions hosted at port `3082`. An example is below:


    http://localhost:3082/{{extensions-folder-name}}-extension.js

Update extension files on remote Control intance, e.g. control-coreui.d3vcloud.com for a `coreui` target.

Note: If running the local mock setup for the `web` project, comment out "extensions" line in d3-web mock/index.html.

## Testing Extensions

To run tests:

    yarn test

To watch tests:

    yarn test:watch


## Production Build

To build the extensions run the following command:

    yarn build

## Development Practices
For information on our development practices and guidelines please refer to [contributing](https://github.com/LodoSoftware/web/blob/develop/CONTRIBUTING.md) guide before creating your PR.
