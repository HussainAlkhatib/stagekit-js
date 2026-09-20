'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2273",
  name: "Replace \"w\" with \"3\"",
  description: "Replaces every w with 3.",
  run: (value) => String(value).split("w").join("3"),
});
