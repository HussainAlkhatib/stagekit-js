'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1321",
  name: "Replace \"h\" with \"s\"",
  description: "Replaces every h with s.",
  run: (value) => String(value).split("h").join("s"),
});
