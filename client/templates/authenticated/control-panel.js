Template.controlPanel.hooks({
  created: () => {
    Template.instance().subscribe( 'control-panel' );
  },
  rendered: () => {},
  destroyed: () => {}
});
