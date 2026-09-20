'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2861",
  name: "Replace \"G\" with \"H\"",
  description: "Replaces every G with H.",
  run: (value) => String(value).split("G").join("H"),
});
