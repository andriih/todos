Todos = new Mongo.Collection('todos');

if (Meteor.isClient) {
 //template heppers

 Template.main.helpers({
    todos: function (){
      return Todos.find();
    }
 });

 Template.main.events({
    "submit .new-todo":function(event){
      var text = event.target.text.value;
      console.log(text);

      return false;
    }
 });
}

if (Meteor.isServer) {
 
}
