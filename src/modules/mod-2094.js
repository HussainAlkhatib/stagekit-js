'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2094",
  name: "Replace \"t\" with \"7\"",
  description: "Replaces every t with 7.",
  run: (value) => String(value).split("t").join("7"),
});
