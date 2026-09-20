'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2042",
  name: "Replace \"t\" with \"g\"",
  description: "Replaces every t with g.",
  run: (value) => String(value).split("t").join("g"),
});
