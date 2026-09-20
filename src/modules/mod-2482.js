'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2482",
  name: "Replace \"A\" with \"t\"",
  description: "Replaces every A with t.",
  run: (value) => String(value).split("A").join("t"),
});
