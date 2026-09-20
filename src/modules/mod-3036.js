'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3036",
  name: "Replace \"J\" with \"y\"",
  description: "Replaces every J with y.",
  run: (value) => String(value).split("J").join("y"),
});
