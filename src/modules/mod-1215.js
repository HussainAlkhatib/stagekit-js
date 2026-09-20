'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1215",
  name: "Replace \"f\" with \"I\"",
  description: "Replaces every f with I.",
  run: (value) => String(value).split("f").join("I"),
});
