public class MazeGame {
    public Maze createMaze(){
        Maze aMaze = new Maze();
        Room r1 = new Room(l) ;
        Room r2 = new Room(2) ;
        Door theDoor = new Door(r1,r2);

        aMaze.addRoom(r1);
        aMaze.addRoom(r2);

        r1.setSide(NORTH, new Wall());
        r1.setSide(EAST, theDoor);
        r1.setSide(SOUTH, new Wall());
        r1.setSide(WEST, new Wall());

        r2.setSide(NORTH, new Wall());
        r2.setSide(SOUTH, new Wall());
        r2.setSide(EAST, new Wall());
        r2.setSide(WEST, theDoor) ;
        
        return aMaze;
    }
}