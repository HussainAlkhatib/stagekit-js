'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1819",
  name: "Replace \"p\" with \"C\"",
  description: "Replaces every p with C.",
  run: (value) => String(value).split("p").join("C"),
});
