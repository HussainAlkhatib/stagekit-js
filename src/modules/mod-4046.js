'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4046",
  name: "Replace \"Z\" with \"7\"",
  description: "Replaces every Z with 7.",
  run: (value) => String(value).split("Z").join("7"),
});
