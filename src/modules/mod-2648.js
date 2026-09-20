'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2648",
  name: "Replace \"D\" with \"c\"",
  description: "Replaces every D with c.",
  run: (value) => String(value).split("D").join("c"),
});
