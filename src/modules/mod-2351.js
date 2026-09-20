'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2351",
  name: "Replace \"y\" with \"k\"",
  description: "Replaces every y with k.",
  run: (value) => String(value).split("y").join("k"),
});
