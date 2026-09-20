'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1359",
  name: "Replace \"h\" with \"4\"",
  description: "Replaces every h with 4.",
  run: (value) => String(value).split("h").join("4"),
});
