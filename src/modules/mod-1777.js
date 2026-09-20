'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1777",
  name: "Replace \"o\" with \"V\"",
  description: "Replaces every o with V.",
  run: (value) => String(value).split("o").join("V"),
});
