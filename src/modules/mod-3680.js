'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3680",
  name: "Replace \"T\" with \"7\"",
  description: "Replaces every T with 7.",
  run: (value) => String(value).split("T").join("7"),
});
