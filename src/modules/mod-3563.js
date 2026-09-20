'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3563",
  name: "Replace \"S\" with \"c\"",
  description: "Replaces every S with c.",
  run: (value) => String(value).split("S").join("c"),
});
