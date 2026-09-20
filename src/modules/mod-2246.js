'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2246",
  name: "Replace \"w\" with \"C\"",
  description: "Replaces every w with C.",
  run: (value) => String(value).split("w").join("C"),
});
