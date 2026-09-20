'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1353",
  name: "Replace \"h\" with \"Y\"",
  description: "Replaces every h with Y.",
  run: (value) => String(value).split("h").join("Y"),
});
