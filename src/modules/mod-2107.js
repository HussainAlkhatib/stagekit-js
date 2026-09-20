'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2107",
  name: "Replace \"u\" with \"k\"",
  description: "Replaces every u with k.",
  run: (value) => String(value).split("u").join("k"),
});
