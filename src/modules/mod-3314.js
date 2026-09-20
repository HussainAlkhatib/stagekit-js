'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3314",
  name: "Replace \"N\" with \"7\"",
  description: "Replaces every N with 7.",
  run: (value) => String(value).split("N").join("7"),
});
