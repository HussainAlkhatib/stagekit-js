'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2720",
  name: "Replace \"E\" with \"n\"",
  description: "Replaces every E with n.",
  run: (value) => String(value).split("E").join("n"),
});
