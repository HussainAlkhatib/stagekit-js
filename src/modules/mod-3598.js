'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3598",
  name: "Replace \"S\" with \"L\"",
  description: "Replaces every S with L.",
  run: (value) => String(value).split("S").join("L"),
});
