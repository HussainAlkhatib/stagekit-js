'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2779",
  name: "Replace \"F\" with \"l\"",
  description: "Replaces every F with l.",
  run: (value) => String(value).split("F").join("l"),
});
