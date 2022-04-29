    class IconWindow : public Window {
    public:
        // ...
        virtual void DrawContents();
    private:
        const char* _bitmapName;
    };