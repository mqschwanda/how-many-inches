let applyRules = ( collection ) =>  {
  collection.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
  });
  collection.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
  });
}

export default applyRules;
