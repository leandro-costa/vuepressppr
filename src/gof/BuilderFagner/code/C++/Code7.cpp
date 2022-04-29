    void StandardMazeBuilder::BuildRoom (int n) {
        if (!_currentMaze->RoomNo(n)) {
            Room* room = new Room(n);
            _currentMaze->AddRoom(room);
    
            room->SetSide(North, new Wall);
            room->SetSide(South, new Wall);
            room->SetSide(East, new Wall);
            room->SetSide(West, new Wall);
        }
    }