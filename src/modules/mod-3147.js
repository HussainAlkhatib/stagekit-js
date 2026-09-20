'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3147",
  name: "Replace \"L\" with \"n\"",
  description: "Replaces every L with n.",
  run: (value) => String(value).split("L").join("n"),
});
