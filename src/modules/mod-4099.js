'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4099",
  name: "Replace \"0\" with \"Y\"",
  description: "Replaces every 0 with Y.",
  run: (value) => String(value).split("0").join("Y"),
});
