"use client";

import { useEffect } from "react";
import Script from "next/script";
import {
  getMediaCssUrl,
  getTemplateCssUrl,
  getMediaJsUrl,
  getTemplateJsUrl,
} from "@/lib/assets";

// Extend Window interface for Leaflet and UIkit
declare global {
  interface Window {
    L?: any;
    UIkit?: any;
  }
}

/**
 * Component để load tất cả CSS và JS từ media và templates
 * Sử dụng trong layout chính
 */
export const PageHead: React.FC = () => {
  useEffect(() => {
    // Load CSS vào head
    const cssFiles = [
      getMediaCssUrl(
        "vendor/joomla-custom-elements/css/joomla-alert.mineeda.css"
      ),
      getMediaCssUrl("system/css/joomla-fontawesome.min0c40.css"),
      getTemplateCssUrl("yootheme_ca/css/theme.9d8de.css"),
      getTemplateCssUrl("yootheme_ca/css/custom0c40.css"),
      getMediaCssUrl("plg_system_jcepro/site/css/content.mine24d.css"),
      getMediaCssUrl("mod_languages/css/template.mineeda.css"),
    ];

    cssFiles.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <>
      {/* Load jQuery trước */}
      <Script
        src={getMediaJsUrl("vendor/jquery/js/jquery.min8a0c.js")}
        strategy="beforeInteractive"
      />
      <Script
        src={getMediaJsUrl("legacy/js/jquery-noconflict.min1fec.js")}
        strategy="beforeInteractive"
      />

      {/* Load system JS */}
      <Script
        src={getMediaJsUrl("system/js/core.minaadb.js")}
        strategy="afterInteractive"
      />
      <Script
        src={getMediaJsUrl(
          "vendor/webcomponentsjs/js/webcomponents-bundle.min0577.js"
        )}
        strategy="lazyOnload"
      />
      <Script
        src={getMediaJsUrl("system/js/joomla-hidden-mail.min4f8c.js")}
        type="module"
        strategy="afterInteractive"
      />
      <Script
        src={getMediaJsUrl("system/js/messages.minee3c.js")}
        type="module"
        strategy="afterInteractive"
      />

      {/* Load template JS */}
      <Script
        src={getTemplateJsUrl(
          "yootheme/packages/theme-cookie/app/cookie.min0c40.js"
        )}
        strategy="lazyOnload"
      />
      <Script
        src={getTemplateJsUrl(
          "yootheme/vendor/assets/uikit/dist/js/uikit.min0c40.js"
        )}
        strategy="afterInteractive"
      />
      <Script
        src={getTemplateJsUrl(
          "yootheme/vendor/assets/uikit/dist/js/uikit-icons-fjord.min0c40.js"
        )}
        strategy="afterInteractive"
      />

      {/* Load Leaflet JS for maps - must load before theme.js */}
      <Script
        src={getTemplateJsUrl(
          "yootheme/vendor/assets/leaflet/leaflet/dist/leaflet0c40.js"
        )}
        strategy="afterInteractive"
        onLoad={() => {
          // Ensure Leaflet is available globally
          if (typeof window !== "undefined" && !window.L) {
            // Wait a bit if Leaflet not immediately available
            setTimeout(() => {
              if (window.L && window.UIkit) {
                // Force UIkit to re-initialize maps
                window.UIkit.update(document.body);
              }
            }, 100);
          }
        }}
      />

      <Script
        src={getTemplateJsUrl("yootheme/js/theme0c40.js")}
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize maps after theme.js loads
          if (typeof window !== "undefined" && window.UIkit && window.L) {
            // Force UIkit to initialize all map components
            const mapElements = document.querySelectorAll("[uk-map]");
            mapElements.forEach((el) => {
              if (window.UIkit.map) {
                window.UIkit.map(el);
              }
            });
            // Also try update
            if (window.UIkit.update) {
              window.UIkit.update(document.body);
            }
          }
        }}
      />
      <Script
        src={getTemplateJsUrl("yootheme_ca/js/custom0c40.js")}
        strategy="afterInteractive"
      />

      {/* External JS */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-974744979"
        strategy="lazyOnload"
        async
      />
      <Script
        src="https://www.bookacamp.de/common/js/bac.min.js"
        strategy="lazyOnload"
      />

      {/* Inline Scripts */}
      <Script
        id="joomla-script-options"
        type="application/json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "joomla.jtext": {
              ERROR: "Error",
              MESSAGE: "Message",
              NOTICE: "Notice",
              WARNING: "Warning",
              JCLOSE: "Close",
              JOK: "OK",
              JOPEN: "Open",
            },
            "system.paths": {
              root: "",
              rootFull: "https://www.campadventure.de/",
              base: "",
              baseFull: "https://www.campadventure.de/",
            },
            "csrf.token": "8a3c5a59abbb46dcce51e88ce0af0413",
          }),
        }}
      />

      <Script
        id="yootheme-theme-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.yootheme ||= {}; var $theme = yootheme.theme = { "cookie": { "mode": "notification", "template": "<div class=\\"tm-cookie-banner uk-section uk-section-xsmall uk-section-muted uk-position-bottom uk-position-fixed\\"> <div class=\\"uk-container uk-container-expand uk-text-center\\"> <p>By using this website, you agree to the use of cookies as described in our Data Protection Policy.<\\/p> <button type=\\"button\\" class=\\"js-accept uk-button uk-button-default uk-margin-small-left\\" data-uk-toggle=\\"target: !.uk-section; animation: true\\">Ok<\\/button> <\\/div> <\\/div>", "position": "bottom" }, "i18n": { "close": { "label": "Close" }, "totop": { "label": "Back to top" }, "marker": { "label": "Open" }, "navbarToggleIcon": { "label": "Open Menu" }, "paginationPrevious": { "label": "Previous page" }, "paginationNext": { "label": "Next Page" }, "searchIcon": { "toggle": "Open Search", "submit": "Submit Search" }, "slider": { "next": "Next slide", "previous": "Previous slide", "slideX": "Slide %s", "slideLabel": "%s of %s" }, "slideshow": { "next": "Next slide", "previous": "Previous slide", "slideX": "Slide %s", "slideLabel": "%s of %s" }, "lightboxPanel": { "next": "Next slide", "previous": "Previous slide", "slideLabel": "%s of %s", "close": "Close" } } };`,
        }}
      />

      <Script
        id="chatwoot-integration"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `window.chatwootSettings = { "locale": "de" }; (function (d, t) { var BASE_URL = "https://app.chatlyn.com/"; var g = d.createElement(t), s = d.getElementsByTagName(t)[0]; g.src = BASE_URL + "/packs/js/sdk.js"; g.defer = true; g.async = true; s.parentNode.insertBefore(g, s); g.onload = function () { window.chatwootSDK.run({ websiteToken: 'EZJsgznZEWkQfHAihvHPjYdj', baseUrl: BASE_URL, whatsApp: "+123456789", email: "info@ggcamp.org", facebook: "ggcamp" }); }; })(document, "script");`,
        }}
      />

      <Script
        id="google-tag-manager"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-MHJQS7S');`,
        }}
      />

      <Script
        id="google-ads-conversion"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'AW-974744979');`,
        }}
      />

      <Script
        id="facebook-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `!function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = true; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '238733008357932'); fbq('track', 'PageView');`,
        }}
      />

      <Script
        id="microsoft-bing-uet"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, t, r, u) { var f, n, i; w[u] = w[u] || []; f = function () { var o = { ti: "211014791" }; o.q = w[u]; w[u] = new UET(o); w[u].push("pageLoad"); }; n = d.createElement(t); n.src = r; n.async = 1; n.onload = n.onreadystatechange = function () { var s = this.readyState; if (!s || s === "loaded" || s === "complete") { f(); n.onload = n.onreadystatechange = null; } }; i = d.getElementsByTagName(t)[0]; i.parentNode.insertBefore(n, i); })(window, document, "script", "https://bat.bing.com/bat.js", "uetq");`,
        }}
      />

      <Script
        id="yootheme-mobile-nav-fix"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('DOMContentLoaded', function () { const parentItems = document.querySelectorAll('#module-menu-dialog-mobile > ul > li.uk-parent > a'); parentItems.forEach(link => { if (!link.querySelector('[uk-nav-parent-icon]')) { const icon = document.createElement('span'); icon.setAttribute('uk-nav-parent-icon', ''); link.appendChild(icon); } }); });`,
        }}
      />

      <Script
        id="yootheme-mobile-nav-click"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('DOMContentLoaded', function () { const parentItems = document.querySelectorAll('#module-menu-dialog-mobile li.uk-parent'); parentItems.forEach(parent => { const subMenu = parent.querySelector('.uk-nav-sub'); if (subMenu) { subMenu.setAttribute('hidden', ''); parent.classList.remove('uk-open'); const link = parent.querySelector('a'); if (link) link.setAttribute('aria-expanded', 'false'); } }); parentItems.forEach(parent => { const link = parent.querySelector('a'); const subMenu = parent.querySelector('.uk-nav-sub'); if (!link || !subMenu) return; link.addEventListener('click', function (e) { const isHidden = subMenu.hasAttribute('hidden'); if (isHidden) { e.preventDefault(); parentItems.forEach(other => { if (other !== parent) { const otherSub = other.querySelector('.uk-nav-sub'); const otherLink = other.querySelector('a'); if (otherSub) otherSub.setAttribute('hidden', ''); other.classList.remove('uk-open'); if (otherLink) otherLink.setAttribute('aria-expanded', 'false'); } }); subMenu.removeAttribute('hidden'); parent.classList.add('uk-open'); link.setAttribute('aria-expanded', 'true'); } }); }); });`,
        }}
      />

      {/* Initialize UIkit maps after all scripts loaded */}
      <Script
        id="uikit-maps-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function initMaps() {
                if (typeof window !== 'undefined' && window.UIkit && window.L) {
                  // Find all map elements
                  const mapElements = document.querySelectorAll('[uk-map]');
                  mapElements.forEach(function(el) {
                    // UIkit should auto-initialize, but force it if needed
                    if (window.UIkit.map && !el._uikitMap) {
                      try {
                        window.UIkit.map(el);
                      } catch(e) {
                        console.log('Map init error:', e);
                      }
                    }
                  });
                  
                  // Also try global update
                  if (window.UIkit.update) {
                    window.UIkit.update(document.body);
                  }
                } else {
                  // Retry after a short delay if UIkit or Leaflet not ready
                  setTimeout(initMaps, 200);
                }
              }
              
              // Wait for DOM and scripts
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(initMaps, 500);
                });
              } else {
                setTimeout(initMaps, 500);
              }
            })();
          `,
        }}
      />

      {/* Bookacamp Integration */}
      <Script
        src="https://www.bookacamp.de/common/js/bac.min.js"
        strategy="lazyOnload"
      />
    </>
  );
};
