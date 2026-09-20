'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4030",
  name: "Replace \"Z\" with \"Q\"",
  description: "Replaces every Z with Q.",
  run: (value) => String(value).split("Z").join("Q"),
});
