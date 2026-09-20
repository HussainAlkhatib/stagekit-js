'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3710",
  name: "Replace \"U\" with \"B\"",
  description: "Replaces every U with B.",
  run: (value) => String(value).split("U").join("B"),
});
