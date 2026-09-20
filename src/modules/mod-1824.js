'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1824",
  name: "Replace \"p\" with \"H\"",
  description: "Replaces every p with H.",
  run: (value) => String(value).split("p").join("H"),
});
