'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1362",
  name: "Replace \"h\" with \"7\"",
  description: "Replaces every h with 7.",
  run: (value) => String(value).split("h").join("7"),
});
