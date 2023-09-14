import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let PSPDFKit, instance;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      PSPDFKit.unload(container);

      const defaultItems = PSPDFKit.defaultToolbarItems;
      console.log(defaultItems,'def');

      const itemsToRemove = ["multi-annotations-selection", "ink", "signature", "image", "stamp", "callout", "line", "arrow", "link", "rectangle", "ellipse", "polygon", "cloudy-polygon", "polyline", "document-editor", "document-crop"];

      const filteredItems = defaultItems.filter(
        (item) => !itemsToRemove.includes(item.type)
      );

      instance = await PSPDFKit.load({
        container,
        DocumentType: props.documentType,
        document: props.document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        toolbarItems: filteredItems,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
