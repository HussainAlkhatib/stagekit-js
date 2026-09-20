'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2176",
  name: "Replace \"v\" with \"s\"",
  description: "Replaces every v with s.",
  run: (value) => String(value).split("v").join("s"),
});
