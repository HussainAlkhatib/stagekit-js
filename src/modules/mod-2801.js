'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2801",
  name: "Replace \"F\" with \"I\"",
  description: "Replaces every F with I.",
  run: (value) => String(value).split("F").join("I"),
});
