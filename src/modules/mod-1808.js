'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1808",
  name: "Replace \"p\" with \"r\"",
  description: "Replaces every p with r.",
  run: (value) => String(value).split("p").join("r"),
});
