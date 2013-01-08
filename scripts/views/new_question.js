App.Views.NewQuestion = Backbone.View.extend({

  events: {
    "click #addItem": "addItem"
  },

  initialize: function(options){
    // When currentUser changes, call render() with 'this' as the context
    App.currentUser.on("change", this.render, this);
    this.render();
  },

  render: function() {
    this.$el.toggleClass("hidden", !App.currentUser.isLoggedIn());
    this.$el.find("#asker").text(App.currentUser.get('userName'));
    return this;
  },

  addItem: function() {
    var question = {
      text: this.$("#newQuestion").val(),
      userName: App.currentUser.get("userName")
    };

    this.model.add(new App.Models.Question(question));
    this.$('#newQuestion').val('');
  }

});
