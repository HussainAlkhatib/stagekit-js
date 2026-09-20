'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4229",
  name: "Replace \"2\" with \"7\"",
  description: "Replaces every 2 with 7.",
  run: (value) => String(value).split("2").join("7"),
});
