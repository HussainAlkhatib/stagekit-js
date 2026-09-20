'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1477",
  name: "Replace \"j\" with \"0\"",
  description: "Replaces every j with 0.",
  run: (value) => String(value).split("j").join("0"),
});
