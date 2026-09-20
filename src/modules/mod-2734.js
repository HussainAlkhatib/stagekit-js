'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2734",
  name: "Replace \"E\" with \"B\"",
  description: "Replaces every E with B.",
  run: (value) => String(value).split("E").join("B"),
});
