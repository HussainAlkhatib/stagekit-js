'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0678",
  name: "Replace \"c\" with \"k\"",
  description: "Replaces every c with k.",
  run: (value) => String(value).split("c").join("k"),
});
