'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3493",
  name: "Replace \"Q\" with \"3\"",
  description: "Replaces every Q with 3.",
  run: (value) => String(value).split("Q").join("3"),
});
