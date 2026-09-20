'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4494",
  name: "Replace \"7\" with \"s\"",
  description: "Replaces every 7 with s.",
  run: (value) => String(value).split("7").join("s"),
});
