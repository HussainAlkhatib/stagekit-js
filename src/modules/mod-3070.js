'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3070",
  name: "Replace \"J\" with \"7\"",
  description: "Replaces every J with 7.",
  run: (value) => String(value).split("J").join("7"),
});
