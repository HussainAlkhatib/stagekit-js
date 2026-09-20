'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2063",
  name: "Replace \"t\" with \"C\"",
  description: "Replaces every t with C.",
  run: (value) => String(value).split("t").join("C"),
});
