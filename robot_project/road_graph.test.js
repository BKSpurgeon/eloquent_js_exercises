const {roadGraph, Village } = require('./road_graph');

test("gets all destinations to alice's house", () => {
  alices_destinations = ["Bob's House", "Cabin", "Post Office"]

  expect(roadGraph["Alice's House"]).toEqual(alices_destinations)
})

test("Village class", () => {
  parcels = [{place: "Post Office", address: "Alice's House"}];
  old_village = new Village("Alice's House", parcels);

  expect(old_village.move("Alice's House")).toEqual(old_village)
})