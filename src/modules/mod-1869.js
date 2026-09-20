'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1869",
  name: "Replace \"q\" with \"r\"",
  description: "Replaces every q with r.",
  run: (value) => String(value).split("q").join("r"),
});
