'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2396",
  name: "Replace \"y\" with \"4\"",
  description: "Replaces every y with 4.",
  run: (value) => String(value).split("y").join("4"),
});
