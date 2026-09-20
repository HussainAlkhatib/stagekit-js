'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1592",
  name: "Replace \"l\" with \"T\"",
  description: "Replaces every l with T.",
  run: (value) => String(value).split("l").join("T"),
});
