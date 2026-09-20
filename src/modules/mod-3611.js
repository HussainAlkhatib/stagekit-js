'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3611",
  name: "Replace \"S\" with \"Z\"",
  description: "Replaces every S with Z.",
  run: (value) => String(value).split("S").join("Z"),
});
