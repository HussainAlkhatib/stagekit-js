'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0286",
  name: "Replace \"a\" with \"A\"",
  description: "Replaces every a with A.",
  run: (value) => String(value).split("a").join("A"),
});
