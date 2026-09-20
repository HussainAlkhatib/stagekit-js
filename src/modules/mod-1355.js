'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1355",
  name: "Replace \"h\" with \"0\"",
  description: "Replaces every h with 0.",
  run: (value) => String(value).split("h").join("0"),
});
