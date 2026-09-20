'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4103",
  name: "Replace \"0\" with \"3\"",
  description: "Replaces every 0 with 3.",
  run: (value) => String(value).split("0").join("3"),
});
