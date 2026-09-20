'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1207",
  name: "Replace \"f\" with \"A\"",
  description: "Replaces every f with A.",
  run: (value) => String(value).split("f").join("A"),
});
