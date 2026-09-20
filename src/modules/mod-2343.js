'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2343",
  name: "Replace \"y\" with \"c\"",
  description: "Replaces every y with c.",
  run: (value) => String(value).split("y").join("c"),
});
