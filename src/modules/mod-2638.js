'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2638",
  name: "Replace \"C\" with \"2\"",
  description: "Replaces every C with 2.",
  run: (value) => String(value).split("C").join("2"),
});
