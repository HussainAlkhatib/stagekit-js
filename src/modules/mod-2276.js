'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2276",
  name: "Replace \"w\" with \"6\"",
  description: "Replaces every w with 6.",
  run: (value) => String(value).split("w").join("6"),
});
