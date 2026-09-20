'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2756",
  name: "Replace \"E\" with \"Y\"",
  description: "Replaces every E with Y.",
  run: (value) => String(value).split("E").join("Y"),
});
