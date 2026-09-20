'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4648",
  name: "Replace \"9\" with \"Y\"",
  description: "Replaces every 9 with Y.",
  run: (value) => String(value).split("9").join("Y"),
});
