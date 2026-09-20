'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3951",
  name: "Replace \"Y\" with \"y\"",
  description: "Replaces every Y with y.",
  run: (value) => String(value).split("Y").join("y"),
});
