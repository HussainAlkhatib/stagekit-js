'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3614",
  name: "Replace \"S\" with \"2\"",
  description: "Replaces every S with 2.",
  run: (value) => String(value).split("S").join("2"),
});
