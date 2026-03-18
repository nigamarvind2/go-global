import { useEffect, useMemo } from "react";

export type JsonLdProps = {
  id?: string;
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

const JsonLd = ({ id, data }: JsonLdProps) => {
  const json = useMemo(() => JSON.stringify(data), [data]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    if (id) {
      script.id = id;
    }
    script.text = json;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [id, json]);

  return null;
};

export default JsonLd;
