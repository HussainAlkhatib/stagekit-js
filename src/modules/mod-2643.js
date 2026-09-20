'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2643",
  name: "Replace \"C\" with \"7\"",
  description: "Replaces every C with 7.",
  run: (value) => String(value).split("C").join("7"),
});
