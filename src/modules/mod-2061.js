'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2061",
  name: "Replace \"t\" with \"A\"",
  description: "Replaces every t with A.",
  run: (value) => String(value).split("t").join("A"),
});
