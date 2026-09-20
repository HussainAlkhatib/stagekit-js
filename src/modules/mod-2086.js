'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2086",
  name: "Replace \"t\" with \"Z\"",
  description: "Replaces every t with Z.",
  run: (value) => String(value).split("t").join("Z"),
});
