'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3131",
  name: "Replace \"K\" with \"7\"",
  description: "Replaces every K with 7.",
  run: (value) => String(value).split("K").join("7"),
});
