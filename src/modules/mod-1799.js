'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1799",
  name: "Replace \"p\" with \"h\"",
  description: "Replaces every p with h.",
  run: (value) => String(value).split("p").join("h"),
});
