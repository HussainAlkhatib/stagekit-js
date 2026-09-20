'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1452",
  name: "Replace \"j\" with \"B\"",
  description: "Replaces every j with B.",
  run: (value) => String(value).split("j").join("B"),
});
