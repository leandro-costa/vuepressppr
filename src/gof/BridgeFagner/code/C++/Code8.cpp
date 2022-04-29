   class XWindowImp : public WindowImp {

    public:
        XWindowImp();
    
        virtual void DeviceRect(Coord, Coord, Coord, Coord);
        // remainder of public interface...
    private:
        // lots of X window system-specific state, including:
        Display* _dpy;
        Drawable _winid;  // window id
        GC _gc;           // window graphic context
    };