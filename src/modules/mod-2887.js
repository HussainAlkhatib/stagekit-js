'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2887",
  name: "Replace \"G\" with \"7\"",
  description: "Replaces every G with 7.",
  run: (value) => String(value).split("G").join("7"),
});
