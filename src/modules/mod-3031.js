'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3031",
  name: "Replace \"J\" with \"t\"",
  description: "Replaces every J with t.",
  run: (value) => String(value).split("J").join("t"),
});
