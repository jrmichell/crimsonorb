import { useEffect, useRef } from "react";
import { Widget } from "@typeform/embed-react";
import { injectTypeformStyles } from "./injectTypeformStyles";

interface TypeformEmbedProps {
  formId: string;
  height?: number;
  width?: number;
  className?: string;
}

const TypeformEmbed: React.FC<TypeformEmbedProps> = ({
  formId,
  height,
  width,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === "IFRAME") {
            const iframe = node as HTMLIFrameElement;
            iframe.addEventListener("load", () => injectTypeformStyles(iframe));
          }
        });
      });
    });

    if (container) {
      observer.observe(container, { childList: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <Widget
        id={formId}
        style={{ width: `${width}px`, height: `${height}px` }}
        className="my-form"
      />
    </div>
  );
};

export default TypeformEmbed;
