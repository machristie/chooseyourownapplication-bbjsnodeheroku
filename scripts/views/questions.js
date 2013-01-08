App.Views.Questions = Backbone.View.extend({

  initialize: function() {
    this.model.on("add", this.renderItem, this);
  },

  render: function() {
    return this;
  },

  renderItem: function(item) {
    var newView = new App.Views.Question({model: item});
    this.$el.append(newView.render().el);
  }
});
