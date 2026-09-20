'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2204",
  name: "Replace \"v\" with \"V\"",
  description: "Replaces every v with V.",
  run: (value) => String(value).split("v").join("V"),
});
