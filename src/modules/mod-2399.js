'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2399",
  name: "Replace \"y\" with \"7\"",
  description: "Replaces every y with 7.",
  run: (value) => String(value).split("y").join("7"),
});
