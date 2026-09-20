'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1621",
  name: "Replace \"m\" with \"n\"",
  description: "Replaces every m with n.",
  run: (value) => String(value).split("m").join("n"),
});
