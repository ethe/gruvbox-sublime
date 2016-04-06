module.exports = function (values) {
  'use strict';

  const stOpts = values.options;

  return [

    /**
     * Enable Statusbar Border
     */

    {
      class: 'status_bar',
      settings: [stOpts.enableStatusbarBorder],

      'layer2.opacity': 1,
    },

    {
      class: 'panel_control',
      settings: [stOpts.enableStatusbarBorder],

      'layer1.opacity': 1,
    },

    /**
     * Enable Sidebar Border
     */

    {
      class: 'sidebar_container',
      settings: [stOpts.enableSidebarBorder],

      'layer1.opacity': 1,
    },

    /**
     * Enable Tab Borders
     */

    {
      class: 'tabset_control',
      settings: [stOpts.enableTabBorders],
      content_margin: [-1, 0, 12, 0],

      'layer1.opacity': 1,
      'layer2.opacity': 1,
    },

    {
      class: 'tabset_control',
      settings: [stOpts.enableTabBorders, stOpts.enableSidebarBorder],

      'layer2.opacity': 0,
    },

    {
      class: 'tab_control',
      settings: [stOpts.enableTabBorders],

      'layer2.opacity': 1,
    },

    {
      class: 'tab_control',
      settings: [stOpts.enableTabBorders],
      attributes: ['selected'],

      'layer1.opacity': 1, // Border - Left & Right
      'layer2.opacity': 0, // Border - Bottom
    },

  ];
};
