'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1301",
  name: "Replace \"g\" with \"7\"",
  description: "Replaces every g with 7.",
  run: (value) => String(value).split("g").join("7"),
});
