'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2521",
  name: "Replace \"A\" with \"7\"",
  description: "Replaces every A with 7.",
  run: (value) => String(value).split("A").join("7"),
});
