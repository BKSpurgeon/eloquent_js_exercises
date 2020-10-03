const roadGraph = require('./road_graph');

test("gets all destinations to alice's house", () => {
  alices_destinations = ["Bob's House", "Cabin", "Post Office"]

  expect(roadGraph["Alice's House"]).toEqual(alices_destinations)
})