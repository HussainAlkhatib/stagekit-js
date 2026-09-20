'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4351",
  name: "Replace \"4\" with \"7\"",
  description: "Replaces every 4 with 7.",
  run: (value) => String(value).split("4").join("7"),
});
