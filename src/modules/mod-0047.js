'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0047",
  name: "Whitespace to \".\"",
  description: "Replaces whitespace runs with \".\".",
  run: (value) => String(value).replace(/\s+/g, "."),
});
