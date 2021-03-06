import installed from 'installed';

const packages = [
  'd3',
  'react',
  'redux',
  'jquery',
  'history',
  'react-dom',
  'immutable',
  'flatpickr',
  'field-kit',
  'redux-form',
  'react-redux',
  'redux-thunk',
  'es6-promise',
  'react-router',
  'react-router-redux',
];

// default options
const options = {
  depth: 0,           // depth to traverse
  dev: true,          // exclude all dev dependencies
  extraneous: false,  // includes extraneous deps. Set to false to filter extraneous dependencies out.
};

module.exports = new Promise((res, rej) => installed(process.cwd(), options, (err, pkgs) => {
  if (err) {
    rej(err);
  }
  const versions = packages.reduce((acc, pk) => {
    const ver = pkgs.filter(dep => dep.name === pk)[0].version;
    return Object.assign({}, acc, { [pk]: ver });
  }, {});
  res(versions);
}));
