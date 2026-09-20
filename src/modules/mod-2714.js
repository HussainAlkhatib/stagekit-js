'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2714",
  name: "Replace \"E\" with \"h\"",
  description: "Replaces every E with h.",
  run: (value) => String(value).split("E").join("h"),
});
