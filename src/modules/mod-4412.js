'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4412",
  name: "Replace \"5\" with \"7\"",
  description: "Replaces every 5 with 7.",
  run: (value) => String(value).split("5").join("7"),
});
