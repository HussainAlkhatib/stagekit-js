'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3733",
  name: "Replace \"U\" with \"Z\"",
  description: "Replaces every U with Z.",
  run: (value) => String(value).split("U").join("Z"),
});
