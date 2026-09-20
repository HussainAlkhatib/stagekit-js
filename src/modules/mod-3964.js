'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3964",
  name: "Replace \"Y\" with \"L\"",
  description: "Replaces every Y with L.",
  run: (value) => String(value).split("Y").join("L"),
});
