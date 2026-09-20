'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4449",
  name: "Replace \"6\" with \"I\"",
  description: "Replaces every 6 with I.",
  run: (value) => String(value).split("6").join("I"),
});
