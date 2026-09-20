'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2068",
  name: "Replace \"t\" with \"H\"",
  description: "Replaces every t with H.",
  run: (value) => String(value).split("t").join("H"),
});
