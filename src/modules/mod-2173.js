'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2173",
  name: "Replace \"v\" with \"p\"",
  description: "Replaces every v with p.",
  run: (value) => String(value).split("v").join("p"),
});
