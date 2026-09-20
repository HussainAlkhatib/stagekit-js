'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1807",
  name: "Replace \"p\" with \"q\"",
  description: "Replaces every p with q.",
  run: (value) => String(value).split("p").join("q"),
});
