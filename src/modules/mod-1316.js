'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1316",
  name: "Replace \"h\" with \"n\"",
  description: "Replaces every h with n.",
  run: (value) => String(value).split("h").join("n"),
});
