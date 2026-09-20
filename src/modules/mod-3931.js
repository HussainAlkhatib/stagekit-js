'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3931",
  name: "Replace \"Y\" with \"e\"",
  description: "Replaces every Y with e.",
  run: (value) => String(value).split("Y").join("e"),
});
