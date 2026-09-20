'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1555",
  name: "Replace \"l\" with \"h\"",
  description: "Replaces every l with h.",
  run: (value) => String(value).split("l").join("h"),
});
