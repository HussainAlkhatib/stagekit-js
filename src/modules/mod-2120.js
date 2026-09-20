'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2120",
  name: "Replace \"u\" with \"y\"",
  description: "Replaces every u with y.",
  run: (value) => String(value).split("u").join("y"),
});
