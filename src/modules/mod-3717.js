'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3717",
  name: "Replace \"U\" with \"I\"",
  description: "Replaces every U with I.",
  run: (value) => String(value).split("U").join("I"),
});
