'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1211",
  name: "Replace \"f\" with \"E\"",
  description: "Replaces every f with E.",
  run: (value) => String(value).split("f").join("E"),
});
