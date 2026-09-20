'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2725",
  name: "Replace \"E\" with \"s\"",
  description: "Replaces every E with s.",
  run: (value) => String(value).split("E").join("s"),
});
