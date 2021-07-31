Wall* BombedMazeFactory::MakeWall () const {
    return new BombedWall ;
}

Room* BombedMazeFactory::MakeRoom (int n) const {
    return new RoomRithABomb(n);
}
