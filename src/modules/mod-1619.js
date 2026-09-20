'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1619",
  name: "Replace \"m\" with \"k\"",
  description: "Replaces every m with k.",
  run: (value) => String(value).split("m").join("k"),
});
