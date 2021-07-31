Maze* MazeGame::CreateMaze (MazeFactory& factory){
    Maze* aMaze = factory.MakeMaze();
    Room* r1 = factory.MakeRoom(1);
    Roam* r2 factory.MakeROOm(2);
    Door* aDoor factory.MakeDoor (r1, r2);

    aMaze->AddRoom(r1);
    aMaze->AddRoom(r2);

    r1->SetSide(North, factory.Makewall());
    r1->SetSide(East, aDoor);
    r1->SetSide(South, factory.Makewall());
    r1->SetSide(West, factory.Makewall());

    r2->SetSide(North, factory.Makewall());
    r2->SetSide(East, factory.Makewall());
    r2->SetSide(South, factory.Makewall());
    r2->SetSide(West, aDoor);
    
    return aMaze;
}
