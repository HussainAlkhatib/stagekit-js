'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3256",
  name: "Replace \"N\" with \"a\"",
  description: "Replaces every N with a.",
  run: (value) => String(value).split("N").join("a"),
});
