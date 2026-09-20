'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4239",
  name: "Replace \"3\" with \"h\"",
  description: "Replaces every 3 with h.",
  run: (value) => String(value).split("3").join("h"),
});
