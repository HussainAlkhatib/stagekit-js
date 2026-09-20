'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1826",
  name: "Replace \"p\" with \"J\"",
  description: "Replaces every p with J.",
  run: (value) => String(value).split("p").join("J"),
});
