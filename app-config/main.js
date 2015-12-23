A.app({
  appName: "Hello World",
  appIcon: "heart",
  menuItems: [
    {
      name: "Gifts",
      icon: "gift",
      entityTypeId: "Gift",
    }
  ],
  entities: function(Fields) {
    return {
      Gift: {
        title: 'Gifts',
        fields: {
          item: Fields.text("Item").required(),
          date: Fields.date("Giving Date").required()
        }
      }
    }
  }
});
