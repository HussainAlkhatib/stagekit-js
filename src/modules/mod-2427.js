'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2427",
  name: "Replace \"z\" with \"A\"",
  description: "Replaces every z with A.",
  run: (value) => String(value).split("z").join("A"),
});
