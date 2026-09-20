'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2104",
  name: "Replace \"u\" with \"h\"",
  description: "Replaces every u with h.",
  run: (value) => String(value).split("u").join("h"),
});
