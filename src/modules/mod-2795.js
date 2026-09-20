'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2795",
  name: "Replace \"F\" with \"B\"",
  description: "Replaces every F with B.",
  run: (value) => String(value).split("F").join("B"),
});
