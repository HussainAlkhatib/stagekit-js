'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4007",
  name: "Replace \"Z\" with \"t\"",
  description: "Replaces every Z with t.",
  run: (value) => String(value).split("Z").join("t"),
});
