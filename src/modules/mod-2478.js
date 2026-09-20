'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2478",
  name: "Replace \"A\" with \"p\"",
  description: "Replaces every A with p.",
  run: (value) => String(value).split("A").join("p"),
});
