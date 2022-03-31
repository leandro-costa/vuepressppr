public class EnchantedMazeFactory extends MazeFactory {
    @override
    public Room makeRoom(int n){
        return new EnchantedRoom(n, CastSpell());
    }
    @override
    public Room makeDoor(Room r1, Room r2){
        return new DoorNeedingSpell(n, CastSpell());
    }
    protected Spell castSpe11(){
        //...
    };

}