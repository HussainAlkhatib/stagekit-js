'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1789",
  name: "Replace \"o\" with \"7\"",
  description: "Replaces every o with 7.",
  run: (value) => String(value).split("o").join("7"),
});
