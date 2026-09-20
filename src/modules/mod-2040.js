'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2040",
  name: "Replace \"t\" with \"e\"",
  description: "Replaces every t with e.",
  run: (value) => String(value).split("t").join("e"),
});
