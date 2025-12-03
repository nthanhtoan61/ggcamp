import type { Metadata } from "next";
import { MainLayout } from "@/components/layouts";
import { PageHead } from "@/components/layouts/PageHead";
import { getMediaCssUrl, getTemplateCssUrl } from "@/lib/assets";
import "./globals.css";

export const metadata: Metadata = {
  title: "International adventure, sports & language camps",
  description:
    "Adventure, sports & language camps for kids & teens aged 7–17 in Germany, England & Ireland ✅ Book now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load CSS từ media và templates */}
        <link
          rel="stylesheet"
          href={getMediaCssUrl(
            "vendor/joomla-custom-elements/css/joomla-alert.mineeda.css"
          )}
        />
        <link
          rel="stylesheet"
          href={getMediaCssUrl("system/css/joomla-fontawesome.min0c40.css")}
        />
        {/* FontAwesome CDN fallback - đảm bảo fonts được load đầy đủ */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href={getTemplateCssUrl("yootheme_ca/css/theme.9d8de.css")}
        />
        <link
          rel="stylesheet"
          href={getTemplateCssUrl("yootheme_ca/css/custom0c40.css")}
        />
        <link
          rel="stylesheet"
          href={getMediaCssUrl(
            "plg_system_jcepro/site/css/content.mine24d.css"
          )}
        />
        <link
          rel="stylesheet"
          href={getMediaCssUrl("mod_languages/css/template.mineeda.css")}
        />
        <link
          rel="stylesheet"
          href={getTemplateCssUrl(
            "yootheme/vendor/assets/leaflet/leaflet/dist/leaflet0c40.css"
          )}
        />
      </head>
      <body className="antialiased">
        <PageHead />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
