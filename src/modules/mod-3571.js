'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3571",
  name: "Replace \"S\" with \"k\"",
  description: "Replaces every S with k.",
  run: (value) => String(value).split("S").join("k"),
});
