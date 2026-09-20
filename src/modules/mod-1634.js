'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1634",
  name: "Replace \"m\" with \"A\"",
  description: "Replaces every m with A.",
  run: (value) => String(value).split("m").join("A"),
});
