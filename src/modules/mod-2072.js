'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2072",
  name: "Replace \"t\" with \"L\"",
  description: "Replaces every t with L.",
  run: (value) => String(value).split("t").join("L"),
});
