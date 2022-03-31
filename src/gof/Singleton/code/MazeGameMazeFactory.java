public Maze createMaze (MazeFactory factory){
    Maze aMaze = factory.makeMaze();
    Room r1 = factory.makeRoom(1);
    Roam r2 factory.makeRoom(2);
    Door aDoor factory.makeDoor (r1, r2);

    aMaze.addRoom(r1);
    aMaze.addRoom(r2);

    r1.setSide(NORTH, factory.makewall());
    r1.setSide(EAST, aDoor);
    r1.setSide(SOUTH, factory.makewall());
    r1.setSide(WEST, factory.makewall());

    r2.setSide(NORTH, factory.makewall());
    r2.setSide(EAST, factory.makewall());
    r2.setSide(SOUTH, factory.makewall());
    r2.setSide(WEST, aDoor);
    
    return aMaze;
}
