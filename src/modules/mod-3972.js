'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3972",
  name: "Replace \"Y\" with \"T\"",
  description: "Replaces every Y with T.",
  run: (value) => String(value).split("Y").join("T"),
});
