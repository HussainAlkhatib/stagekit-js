'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0747",
  name: "Replace \"c\" with \"H\"",
  description: "Replaces every c with H.",
  run: (value) => String(value).split("c").join("H"),
});
