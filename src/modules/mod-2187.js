'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2187",
  name: "Replace \"v\" with \"E\"",
  description: "Replaces every v with E.",
  run: (value) => String(value).split("v").join("E"),
});
