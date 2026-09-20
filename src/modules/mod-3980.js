'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3980",
  name: "Replace \"Y\" with \"2\"",
  description: "Replaces every Y with 2.",
  run: (value) => String(value).split("Y").join("2"),
});
