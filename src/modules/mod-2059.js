'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2059",
  name: "Replace \"t\" with \"y\"",
  description: "Replaces every t with y.",
  run: (value) => String(value).split("t").join("y"),
});
