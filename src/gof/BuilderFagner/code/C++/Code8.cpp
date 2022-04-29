    void StandardMazeBuilder::BuildDoor (int n1, int n2) {
        Room* r1 = _currentMaze->RoomNo(n1);
        Room* r2 = _currentMaze->RoomNo(n2);
        Door* d = new Door(r1, r2);
    
        r1->SetSide(CommonWall(r1,r2), d);
        r2->SetSide(CommonWall(r2,r1), d);
    }