'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4073",
  name: "Replace \"0\" with \"y\"",
  description: "Replaces every 0 with y.",
  run: (value) => String(value).split("0").join("y"),
});
