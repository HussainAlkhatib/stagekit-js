'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2167",
  name: "Replace \"v\" with \"j\"",
  description: "Replaces every v with j.",
  run: (value) => String(value).split("v").join("j"),
});
