'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3937",
  name: "Replace \"Y\" with \"k\"",
  description: "Replaces every Y with k.",
  run: (value) => String(value).split("Y").join("k"),
});
