'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4107",
  name: "Replace \"0\" with \"7\"",
  description: "Replaces every 0 with 7.",
  run: (value) => String(value).split("0").join("7"),
});
