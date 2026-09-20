'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1594",
  name: "Replace \"l\" with \"V\"",
  description: "Replaces every l with V.",
  run: (value) => String(value).split("l").join("V"),
});
