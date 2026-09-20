'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2733",
  name: "Replace \"E\" with \"A\"",
  description: "Replaces every E with A.",
  run: (value) => String(value).split("E").join("A"),
});
