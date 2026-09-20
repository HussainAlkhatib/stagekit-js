'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2211",
  name: "Replace \"v\" with \"2\"",
  description: "Replaces every v with 2.",
  run: (value) => String(value).split("v").join("2"),
});
