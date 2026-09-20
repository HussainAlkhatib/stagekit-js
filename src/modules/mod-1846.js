'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1846",
  name: "Replace \"p\" with \"3\"",
  description: "Replaces every p with 3.",
  run: (value) => String(value).split("p").join("3"),
});
