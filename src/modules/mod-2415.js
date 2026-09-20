'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2415",
  name: "Replace \"z\" with \"n\"",
  description: "Replaces every z with n.",
  run: (value) => String(value).split("z").join("n"),
});
