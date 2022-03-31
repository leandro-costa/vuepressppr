public class MazeGame {
    public Maze createMaze(){
        Maze aMaze = new Maze();
        Room r1 = new Room(l) ;
        Room r2 = new Room(2) ;
        Door theDoor = new Door(r1,r2);

        aMaze.addRoom(r1);
        aMaze.addRoom(r2);

        r1.setSide(North, new Wall());
        rl.setSide(East, theDoor);
        rl.setSide(South, new Wall());
        r1.setSide(West, new Wall());

        r2.setSide(North, new Wall());
        r2.setSide(South, new Wall());
        r2.setSide(East, new Wall());
        r2.setSide(West, theDoor) ;
        
        return aMaze;
    }
}
