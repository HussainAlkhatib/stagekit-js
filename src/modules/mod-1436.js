'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1436",
  name: "Replace \"j\" with \"l\"",
  description: "Replaces every j with l.",
  run: (value) => String(value).split("j").join("l"),
});
