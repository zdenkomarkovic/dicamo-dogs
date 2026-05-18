'use strict';
// Shim so webpack can statically detect useEffectEvent as a named export.
// React 19.2+ includes it in the CJS build but the conditional index.js
// prevents webpack's static analysis from finding it.
const React = require('react');
module.exports = React;
exports.useEffectEvent = React.useEffectEvent || function useEffectEvent(fn) { return fn; };
