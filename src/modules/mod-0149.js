'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0149",
  name: "Replace \"a\" with \"k\"",
  description: "Replaces every a with k.",
  run: (value) => String(value).split("a").join("k"),
});
