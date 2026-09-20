'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3136",
  name: "Replace \"L\" with \"c\"",
  description: "Replaces every L with c.",
  run: (value) => String(value).split("L").join("c"),
});
