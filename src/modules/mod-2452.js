'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2452",
  name: "Replace \"z\" with \"Z\"",
  description: "Replaces every z with Z.",
  run: (value) => String(value).split("z").join("Z"),
});
