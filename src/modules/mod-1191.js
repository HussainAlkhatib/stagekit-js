'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1191",
  name: "Replace \"f\" with \"k\"",
  description: "Replaces every f with k.",
  run: (value) => String(value).split("f").join("k"),
});
