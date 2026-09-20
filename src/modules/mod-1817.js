'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1817",
  name: "Replace \"p\" with \"A\"",
  description: "Replaces every p with A.",
  run: (value) => String(value).split("p").join("A"),
});
