'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2045",
  name: "Replace \"t\" with \"j\"",
  description: "Replaces every t with j.",
  run: (value) => String(value).split("t").join("j"),
});
