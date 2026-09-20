'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1545",
  name: "Replace \"k\" with \"7\"",
  description: "Replaces every k with 7.",
  run: (value) => String(value).split("k").join("7"),
});
