App.Views.Login = Backbone.View.extend({

  events: {
    "click #logIn": "login"
  },

  initialize: function() {
    this.model.on("change", this.render, this);
  },

  render: function() {
    console.log("Login.render isLoggedIn", this.model.isLoggedIn());
    this.$el.toggleClass("hidden", this.model.isLoggedIn());
    return this;
  },

  login: function() {
    this.model.logIn(this.$("#userName").val());
  }

});
