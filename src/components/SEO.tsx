import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applySeo } from "@/lib/seo";

export type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
};

const SEO = ({ title, description, image, noIndex }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    applySeo({
      title,
      description,
      image,
      noIndex,
      path: location.pathname,
    });
  }, [title, description, image, noIndex, location.pathname]);

  return null;
};

export default SEO;
