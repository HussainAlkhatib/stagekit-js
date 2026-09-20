'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4657",
  name: "Replace \"9\" with \"7\"",
  description: "Replaces every 9 with 7.",
  run: (value) => String(value).split("9").join("7"),
});
