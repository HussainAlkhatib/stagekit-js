'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0870",
  name: "Replace \"d\" with \"n\"",
  description: "Replaces every d with n.",
  run: (value) => String(value).split("d").join("n"),
});
