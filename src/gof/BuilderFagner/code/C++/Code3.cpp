    Maze* MazeGame::CreateComplexMaze (MazeBuilder& builder) {
        builder.BuildRoom(1);
        // ...
        builder.BuildRoom(1001);
    
        return builder.GetMaze();
    }