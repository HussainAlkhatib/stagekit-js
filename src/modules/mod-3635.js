'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3635",
  name: "Replace \"T\" with \"n\"",
  description: "Replaces every T with n.",
  run: (value) => String(value).split("T").join("n"),
});
