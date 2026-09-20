'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0912",
  name: "Replace \"d\" with \"B\"",
  description: "Replaces every d with B.",
  run: (value) => String(value).split("d").join("B"),
});
