'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1562",
  name: "Replace \"l\" with \"p\"",
  description: "Replaces every l with p.",
  run: (value) => String(value).split("l").join("p"),
});
