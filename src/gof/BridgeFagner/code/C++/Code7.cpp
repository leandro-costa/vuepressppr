   void Window::DrawRect(const Point& p1, const Point& p2) {

        WindowImp* imp = GetWindowImp();

        imp->DeviceRect(p1.X(), p1.Y(), p2.X(), p2.Y());

    }