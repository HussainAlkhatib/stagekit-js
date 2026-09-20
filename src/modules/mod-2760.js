'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2760",
  name: "Replace \"E\" with \"2\"",
  description: "Replaces every E with 2.",
  run: (value) => String(value).split("E").join("2"),
});
