'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1357",
  name: "Replace \"h\" with \"2\"",
  description: "Replaces every h with 2.",
  run: (value) => String(value).split("h").join("2"),
});
