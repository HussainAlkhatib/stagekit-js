'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0011",
  name: "Mask all but last 1",
  description: "Masks all but the last 1 characters.",
  run: (value) => { const s = String(value); const keep = 1; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
