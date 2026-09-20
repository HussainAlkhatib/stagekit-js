'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1428",
  name: "Replace \"j\" with \"c\"",
  description: "Replaces every j with c.",
  run: (value) => String(value).split("j").join("c"),
});
