'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2181",
  name: "Replace \"v\" with \"y\"",
  description: "Replaces every v with y.",
  run: (value) => String(value).split("v").join("y"),
});
