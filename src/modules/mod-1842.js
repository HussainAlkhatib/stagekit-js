'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1842",
  name: "Replace \"p\" with \"Z\"",
  description: "Replaces every p with Z.",
  run: (value) => String(value).split("p").join("Z"),
});
