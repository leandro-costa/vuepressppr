public class MazeFactory {
    
    public Maze makeMaze(){
         return new Maze(); 
    }
    public Wall makeWa11(){
         return new Wall(); 
    }
    public Room makeRoom(int n){
         return new Room(n);
    }
    public Door makeDoor (Room rl, Roam r2){
         return new Door(rl, r2);
    }
}