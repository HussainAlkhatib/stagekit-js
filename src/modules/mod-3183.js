'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3183",
  name: "Replace \"L\" with \"Y\"",
  description: "Replaces every L with Y.",
  run: (value) => String(value).split("L").join("Y"),
});
