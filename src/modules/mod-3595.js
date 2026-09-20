'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3595",
  name: "Replace \"S\" with \"I\"",
  description: "Replaces every S with I.",
  run: (value) => String(value).split("S").join("I"),
});
