'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2079",
  name: "Replace \"t\" with \"S\"",
  description: "Replaces every t with S.",
  run: (value) => String(value).split("t").join("S"),
});
