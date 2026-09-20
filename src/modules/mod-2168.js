'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2168",
  name: "Replace \"v\" with \"k\"",
  description: "Replaces every v with k.",
  run: (value) => String(value).split("v").join("k"),
});
