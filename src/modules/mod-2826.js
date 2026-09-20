'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2826",
  name: "Replace \"F\" with \"7\"",
  description: "Replaces every F with 7.",
  run: (value) => String(value).split("F").join("7"),
});
