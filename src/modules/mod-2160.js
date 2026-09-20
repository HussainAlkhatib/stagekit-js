'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2160",
  name: "Replace \"v\" with \"c\"",
  description: "Replaces every v with c.",
  run: (value) => String(value).split("v").join("c"),
});
