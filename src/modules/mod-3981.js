'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3981",
  name: "Replace \"Y\" with \"3\"",
  description: "Replaces every Y with 3.",
  run: (value) => String(value).split("Y").join("3"),
});
