'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4168",
  name: "Replace \"1\" with \"7\"",
  description: "Replaces every 1 with 7.",
  run: (value) => String(value).split("1").join("7"),
});
