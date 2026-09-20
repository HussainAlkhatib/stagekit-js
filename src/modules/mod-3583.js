'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3583",
  name: "Replace \"S\" with \"w\"",
  description: "Replaces every S with w.",
  run: (value) => String(value).split("S").join("w"),
});
