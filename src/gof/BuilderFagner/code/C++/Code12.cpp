    int rooms, doors;
    MazeGame game;
    CountingMazeBuilder builder;
    
    game.CreateMaze(builder);
    builder.GetCounts(rooms, doors);
    
    cout << "The maze has "
         << rooms << " rooms and "
         << doors << " doors" << endl;