'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2090",
  name: "Replace \"t\" with \"3\"",
  description: "Replaces every t with 3.",
  run: (value) => String(value).split("t").join("3"),
});
