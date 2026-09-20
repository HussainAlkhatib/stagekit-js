'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2338",
  name: "Replace \"x\" with \"7\"",
  description: "Replaces every x with 7.",
  run: (value) => String(value).split("x").join("7"),
});
