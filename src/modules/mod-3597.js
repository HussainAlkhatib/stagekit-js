'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3597",
  name: "Replace \"S\" with \"K\"",
  description: "Replaces every S with K.",
  run: (value) => String(value).split("S").join("K"),
});
