'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4404",
  name: "Replace \"5\" with \"Y\"",
  description: "Replaces every 5 with Y.",
  run: (value) => String(value).split("5").join("Y"),
});
