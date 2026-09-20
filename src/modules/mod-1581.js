'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1581",
  name: "Replace \"l\" with \"I\"",
  description: "Replaces every l with I.",
  run: (value) => String(value).split("l").join("I"),
});
