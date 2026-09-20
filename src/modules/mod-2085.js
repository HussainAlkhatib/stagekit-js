'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2085",
  name: "Replace \"t\" with \"Y\"",
  description: "Replaces every t with Y.",
  run: (value) => String(value).split("t").join("Y"),
});
