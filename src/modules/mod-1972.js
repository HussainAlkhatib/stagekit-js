'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1972",
  name: "Replace \"r\" with \"7\"",
  description: "Replaces every r with 7.",
  run: (value) => String(value).split("r").join("7"),
});
