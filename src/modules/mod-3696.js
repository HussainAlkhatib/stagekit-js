'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3696",
  name: "Replace \"U\" with \"n\"",
  description: "Replaces every U with n.",
  run: (value) => String(value).split("U").join("n"),
});
