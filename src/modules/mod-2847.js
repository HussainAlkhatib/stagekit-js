'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2847",
  name: "Replace \"G\" with \"s\"",
  description: "Replaces every G with s.",
  run: (value) => String(value).split("G").join("s"),
});
