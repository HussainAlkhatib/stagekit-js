'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2770",
  name: "Replace \"F\" with \"c\"",
  description: "Replaces every F with c.",
  run: (value) => String(value).split("F").join("c"),
});
