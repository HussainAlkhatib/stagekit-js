'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4025",
  name: "Replace \"Z\" with \"L\"",
  description: "Replaces every Z with L.",
  run: (value) => String(value).split("Z").join("L"),
});
