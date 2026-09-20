'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2341",
  name: "Replace \"y\" with \"a\"",
  description: "Replaces every y with a.",
  run: (value) => String(value).split("y").join("a"),
});
