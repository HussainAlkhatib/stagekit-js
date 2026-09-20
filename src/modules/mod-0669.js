'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0669",
  name: "Replace \"c\" with \"h\"",
  description: "Replaces every c with h.",
  run: (value) => String(value).split("c").join("h"),
});
