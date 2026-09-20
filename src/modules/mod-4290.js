'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4290",
  name: "Replace \"3\" with \"7\"",
  description: "Replaces every 3 with 7.",
  run: (value) => String(value).split("3").join("7"),
});
