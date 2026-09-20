'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2831",
  name: "Replace \"G\" with \"c\"",
  description: "Replaces every G with c.",
  run: (value) => String(value).split("G").join("c"),
});
