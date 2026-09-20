'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0963",
  name: "Replace \"d\" with \"S\"",
  description: "Replaces every d with S.",
  run: (value) => String(value).split("d").join("S"),
});
