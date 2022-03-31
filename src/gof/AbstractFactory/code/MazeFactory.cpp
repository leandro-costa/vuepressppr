class MazeFactory {
public:
    MazeFactory();
    
    virtual Maze* MakeMaze() const
        { return new Maze; }
    virtual Wall* MakeWa11() const
        { return new Wall; }
    virtual Room* MakeRoom( int n) const
        { return new Room(n) }
    virtual Door* MakeDoor (Room* rl, Roam* r2) const
        { return new Door (rl, r2) };
}