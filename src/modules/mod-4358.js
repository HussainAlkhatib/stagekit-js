'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4358",
  name: "Replace \"5\" with \"e\"",
  description: "Replaces every 5 with e.",
  run: (value) => String(value).split("5").join("e"),
});
