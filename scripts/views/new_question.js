App.Views.NewQuestion = Backbone.View.extend({

  initialize: function(options){
    // When currentUser changes, call render() with 'this' as the context
    App.currentUser.on("change", this.render, this);
    this.render();
  },

  render: function() {
    this.$el.toggleClass("hidden", !App.currentUser.isLoggedIn());
    this.$el.find("#asker").text(App.currentUser.get('userName'));
    return this;
  }
});
