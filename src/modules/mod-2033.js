'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2033",
  name: "Replace \"s\" with \"7\"",
  description: "Replaces every s with 7.",
  run: (value) => String(value).split("s").join("7"),
});
