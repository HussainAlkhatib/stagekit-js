'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3621",
  name: "Replace \"S\" with \"9\"",
  description: "Replaces every S with 9.",
  run: (value) => String(value).split("S").join("9"),
});
