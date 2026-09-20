'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2088",
  name: "Replace \"t\" with \"1\"",
  description: "Replaces every t with 1.",
  run: (value) => String(value).split("t").join("1"),
});
