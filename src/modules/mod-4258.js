'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4258",
  name: "Replace \"3\" with \"A\"",
  description: "Replaces every 3 with A.",
  run: (value) => String(value).split("3").join("A"),
});
