'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0828",
  name: "Replace \"c\" with \"8\"",
  description: "Replaces every c with 8.",
  run: (value) => String(value).split("c").join("8"),
});
