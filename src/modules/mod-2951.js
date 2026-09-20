'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2951",
  name: "Replace \"I\" with \"a\"",
  description: "Replaces every I with a.",
  run: (value) => String(value).split("I").join("a"),
});
