'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2201",
  name: "Replace \"v\" with \"S\"",
  description: "Replaces every v with S.",
  run: (value) => String(value).split("v").join("S"),
});
