'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2122",
  name: "Replace \"u\" with \"A\"",
  description: "Replaces every u with A.",
  run: (value) => String(value).split("u").join("A"),
});
