if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
      console.log('Create default admin user.');
      
      var adminId = Accounts.createUser({
        username: 'admin',
        email: 'admin@example.com',
        password: 'test123',
        profile: {
            first_name: 'Admin',
            last_name: 'Boss'
        }
      });
    }

  });
}

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Users = new Tabular.Table({
  name: "UsersList",
  collection: Meteor.users,
  columns: [
    {data: "username", title: "Username"}
  ]
});