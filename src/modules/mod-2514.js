'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2514",
  name: "Replace \"A\" with \"0\"",
  description: "Replaces every A with 0.",
  run: (value) => String(value).split("A").join("0"),
});
