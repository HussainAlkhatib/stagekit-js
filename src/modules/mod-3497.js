'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3497",
  name: "Replace \"Q\" with \"7\"",
  description: "Replaces every Q with 7.",
  run: (value) => String(value).split("Q").join("7"),
});
