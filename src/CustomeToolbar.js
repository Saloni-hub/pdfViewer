const renderToolbar = (Toolbar) => (
    <Toolbar>
        {(slots) => {
            const {
                CurrentPageInput,
                Download,
                EnterFullScreen,
                GoToNextPage,
                GoToPreviousPage,
                NumberOfPages,
                Print,
                ShowSearchPopover,
                Zoom,
                ZoomIn,
                ZoomOut,
                SwitchTheme,
            } = slots;
            console.log(slots);
            return (
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <div style={{ padding: '0px 2px' }}>
                        <ShowSearchPopover />
                    </div>
                    <div style={{ padding: '0px 2px' }}>
                        <ZoomOut />
                    </div>
                    <div style={{ padding: '0px 2px' }}>
                        <Zoom />
                    </div>
                    <div style={{ padding: '0px 2px' }}>
                        <ZoomIn />
                    </div>
                    <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                        <GoToPreviousPage />
                    </div>
                    <div style={{ padding: '0px 2px', width: '4rem' }}>
                        <CurrentPageInput />
                    </div>
                    <div style={{ padding: '0px 2px' }}>
                        / <NumberOfPages />
                    </div>
                    <div style={{ padding: '0px 2px' }}>
                        <GoToNextPage />
                    </div>
                    <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                        <SwitchTheme />
                    </div>
                    <div style={{ padding: '0px 2px'}}>
                        <EnterFullScreen />
                    </div>
                    <div style={{ padding: '0px 2px' }}>
                        <Download />
                    </div>
                    <div style={{ padding: '0px 2px' }}>
                        <Print />
                    </div>
                </div>
            );
        }}
    </Toolbar>
);
export default renderToolbar;