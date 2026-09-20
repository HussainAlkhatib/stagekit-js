'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2093",
  name: "Replace \"t\" with \"6\"",
  description: "Replaces every t with 6.",
  run: (value) => String(value).split("t").join("6"),
});
