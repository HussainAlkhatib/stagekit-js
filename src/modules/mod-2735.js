'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2735",
  name: "Replace \"E\" with \"C\"",
  description: "Replaces every E with C.",
  run: (value) => String(value).split("E").join("C"),
});
