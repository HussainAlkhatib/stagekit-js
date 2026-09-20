'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4541",
  name: "Replace \"8\" with \"e\"",
  description: "Replaces every 8 with e.",
  run: (value) => String(value).split("8").join("e"),
});
