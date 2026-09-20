'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3744",
  name: "Replace \"V\" with \"a\"",
  description: "Replaces every V with a.",
  run: (value) => String(value).split("V").join("a"),
});
