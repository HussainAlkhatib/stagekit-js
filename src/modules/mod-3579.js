'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3579",
  name: "Replace \"S\" with \"s\"",
  description: "Replaces every S with s.",
  run: (value) => String(value).split("S").join("s"),
});
