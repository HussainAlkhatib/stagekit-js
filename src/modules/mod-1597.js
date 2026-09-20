'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1597",
  name: "Replace \"l\" with \"Y\"",
  description: "Replaces every l with Y.",
  run: (value) => String(value).split("l").join("Y"),
});
