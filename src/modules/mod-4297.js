'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4297",
  name: "Replace \"4\" with \"e\"",
  description: "Replaces every 4 with e.",
  run: (value) => String(value).split("4").join("e"),
});
