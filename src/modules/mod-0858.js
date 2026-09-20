'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0858",
  name: "Replace \"d\" with \"j\"",
  description: "Replaces every d with j.",
  run: (value) => String(value).split("d").join("j"),
});
