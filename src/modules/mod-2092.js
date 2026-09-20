'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2092",
  name: "Replace \"t\" with \"5\"",
  description: "Replaces every t with 5.",
  run: (value) => String(value).split("t").join("5"),
});
