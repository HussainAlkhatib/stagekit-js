'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1337",
  name: "Replace \"h\" with \"I\"",
  description: "Replaces every h with I.",
  run: (value) => String(value).split("h").join("I"),
});
