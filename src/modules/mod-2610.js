'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2610",
  name: "Replace \"C\" with \"z\"",
  description: "Replaces every C with z.",
  run: (value) => String(value).split("C").join("z"),
});
