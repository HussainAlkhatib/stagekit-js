'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3983",
  name: "Replace \"Y\" with \"5\"",
  description: "Replaces every Y with 5.",
  run: (value) => String(value).split("Y").join("5"),
});
