'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2183",
  name: "Replace \"v\" with \"A\"",
  description: "Replaces every v with A.",
  run: (value) => String(value).split("v").join("A"),
});
