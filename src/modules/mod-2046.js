'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2046",
  name: "Replace \"t\" with \"k\"",
  description: "Replaces every t with k.",
  run: (value) => String(value).split("t").join("k"),
});
