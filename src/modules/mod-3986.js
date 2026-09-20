'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3986",
  name: "Replace \"Y\" with \"8\"",
  description: "Replaces every Y with 8.",
  run: (value) => String(value).split("Y").join("8"),
});
