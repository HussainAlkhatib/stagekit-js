'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1008",
  name: "Replace \"d\" with \"7\"",
  description: "Replaces every d with 7.",
  run: (value) => String(value).split("d").join("7"),
});
