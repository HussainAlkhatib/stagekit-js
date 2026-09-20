'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3982",
  name: "Replace \"Y\" with \"4\"",
  description: "Replaces every Y with 4.",
  run: (value) => String(value).split("Y").join("4"),
});
