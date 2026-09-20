'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4473",
  name: "Replace \"6\" with \"7\"",
  description: "Replaces every 6 with 7.",
  run: (value) => String(value).split("6").join("7"),
});
