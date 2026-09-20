'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1728",
  name: "Replace \"n\" with \"7\"",
  description: "Replaces every n with 7.",
  run: (value) => String(value).split("n").join("7"),
});
