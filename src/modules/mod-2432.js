'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2432",
  name: "Replace \"z\" with \"F\"",
  description: "Replaces every z with F.",
  run: (value) => String(value).split("z").join("F"),
});
