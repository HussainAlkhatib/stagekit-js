'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2091",
  name: "Replace \"t\" with \"4\"",
  description: "Replaces every t with 4.",
  run: (value) => String(value).split("t").join("4"),
});
