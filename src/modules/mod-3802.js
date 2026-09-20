'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3802",
  name: "Replace \"V\" with \"7\"",
  description: "Replaces every V with 7.",
  run: (value) => String(value).split("V").join("7"),
});
