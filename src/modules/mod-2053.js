'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2053",
  name: "Replace \"t\" with \"r\"",
  description: "Replaces every t with r.",
  run: (value) => String(value).split("t").join("r"),
});
