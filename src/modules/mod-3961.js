'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3961",
  name: "Replace \"Y\" with \"I\"",
  description: "Replaces every Y with I.",
  run: (value) => String(value).split("Y").join("I"),
});
