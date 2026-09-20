'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2155",
  name: "Replace \"u\" with \"7\"",
  description: "Replaces every u with 7.",
  run: (value) => String(value).split("u").join("7"),
});
