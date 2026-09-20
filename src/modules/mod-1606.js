'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1606",
  name: "Replace \"l\" with \"7\"",
  description: "Replaces every l with 7.",
  run: (value) => String(value).split("l").join("7"),
});
