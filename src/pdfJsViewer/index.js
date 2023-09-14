import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin,ToolbarProps, ToolbarSlot  } from "@react-pdf-viewer/default-layout";
import { searchPlugin } from "@react-pdf-viewer/search";
import renderToolbar from "../CustomeToolbar";


const PDFViewer = ({ fileName }) => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
    renderToolbar
  });
 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{width: "100%", height: "100%" }}>
        <Worker
          workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js"
        >
          <Viewer
            fileUrl={fileName}
            plugins={[defaultLayoutPluginInstance]}
            defaultScale={SpecialZoomLevel.ActualSize}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PDFViewer;

