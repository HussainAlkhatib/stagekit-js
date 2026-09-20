'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1571",
  name: "Replace \"l\" with \"y\"",
  description: "Replaces every l with y.",
  run: (value) => String(value).split("l").join("y"),
});
