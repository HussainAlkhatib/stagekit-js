'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0030",
  name: "Whitespace to \"_\"",
  description: "Replaces whitespace runs with \"_\".",
  run: (value) => String(value).replace(/\s+/g, "_"),
});
