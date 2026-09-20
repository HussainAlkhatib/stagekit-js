'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3095",
  name: "Replace \"K\" with \"w\"",
  description: "Replaces every K with w.",
  run: (value) => String(value).split("K").join("w"),
});
