'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0065",
  name: "Uncapitalize",
  description: "Lower-cases the first character only.",
  run: (value) => { const s = String(value); return s.charAt(0).toLowerCase() + s.slice(1); },
});
