'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1231",
  name: "Replace \"f\" with \"Y\"",
  description: "Replaces every f with Y.",
  run: (value) => String(value).split("f").join("Y"),
});
