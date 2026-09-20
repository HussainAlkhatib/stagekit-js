'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1205",
  name: "Replace \"f\" with \"y\"",
  description: "Replaces every f with y.",
  run: (value) => String(value).split("f").join("y"),
});
