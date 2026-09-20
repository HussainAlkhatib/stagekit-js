'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3659",
  name: "Replace \"T\" with \"L\"",
  description: "Replaces every T with L.",
  run: (value) => String(value).split("T").join("L"),
});
