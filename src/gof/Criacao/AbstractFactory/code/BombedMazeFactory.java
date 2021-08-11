public class BombedMazeFactory extends MazeFactory {
    @override
    public Wall makeWall(){
        return new BombedWall();
    }
    @override
    public BombedMazeFactory makeRoom(int n){
        return new RoomRithABomb(n);
    }
}