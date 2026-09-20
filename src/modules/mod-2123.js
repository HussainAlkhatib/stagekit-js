'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2123",
  name: "Replace \"u\" with \"B\"",
  description: "Replaces every u with B.",
  run: (value) => String(value).split("u").join("B"),
});
