'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1358",
  name: "Replace \"h\" with \"3\"",
  description: "Replaces every h with 3.",
  run: (value) => String(value).split("h").join("3"),
});
