'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1577",
  name: "Replace \"l\" with \"E\"",
  description: "Replaces every l with E.",
  run: (value) => String(value).split("l").join("E"),
});
