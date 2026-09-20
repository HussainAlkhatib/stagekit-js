'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3924",
  name: "Replace \"X\" with \"7\"",
  description: "Replaces every X with 7.",
  run: (value) => String(value).split("X").join("7"),
});
