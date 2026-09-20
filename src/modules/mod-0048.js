'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0048",
  name: "Capitalize",
  description: "Upper-cases the first character only.",
  run: (value) => { const s = String(value); return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(); },
});
