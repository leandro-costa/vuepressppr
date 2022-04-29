    void StandardMazeBuilder::BuildMaze () {
        _currentMaze = new Maze;
    }
    
    Maze* StandardMazeBuilder::GetMaze () {
        return _currentMaze;
    }