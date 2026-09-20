'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2277",
  name: "Replace \"w\" with \"7\"",
  description: "Replaces every w with 7.",
  run: (value) => String(value).split("w").join("7"),
});
