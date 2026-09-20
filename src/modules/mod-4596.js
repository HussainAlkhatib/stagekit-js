'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4596",
  name: "Replace \"8\" with \"7\"",
  description: "Replaces every 8 with 7.",
  run: (value) => String(value).split("8").join("7"),
});
