'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2675",
  name: "Replace \"D\" with \"E\"",
  description: "Replaces every D with E.",
  run: (value) => String(value).split("D").join("E"),
});
