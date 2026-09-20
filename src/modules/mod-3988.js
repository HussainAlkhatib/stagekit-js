'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3988",
  name: "Replace \"Z\" with \"a\"",
  description: "Replaces every Z with a.",
  run: (value) => String(value).split("Z").join("a"),
});
