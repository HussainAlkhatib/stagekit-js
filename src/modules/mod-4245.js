'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4245",
  name: "Replace \"3\" with \"n\"",
  description: "Replaces every 3 with n.",
  run: (value) => String(value).split("3").join("n"),
});
