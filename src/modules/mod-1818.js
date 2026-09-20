'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1818",
  name: "Replace \"p\" with \"B\"",
  description: "Replaces every p with B.",
  run: (value) => String(value).split("p").join("B"),
});
