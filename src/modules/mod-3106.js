'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3106",
  name: "Replace \"K\" with \"H\"",
  description: "Replaces every K with H.",
  run: (value) => String(value).split("K").join("H"),
});
