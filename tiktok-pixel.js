!function (w, d, t) {
    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src=r+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(s,a)};
    ttq.load('DA1RGIBC77UE3FB79VU0');
    ttq.page();
}(window, document, 'ttq');
// Espeja los eventos de Meta hacia TikTok en cualquier pagina que cargue este script.
(function () {
      var tries = 0;
      var hook = setInterval(function () {
              if (window.fbq && !window.fbq.__ttqHooked) {
                        var orig = window.fbq;
                        window.fbq = function () {
                                    try {
                                                  var a = arguments;
                                                  if (a[0] === 'track' && window.ttq) {
                                                                  if (a[1] === 'Lead') { ttq.track('SubmitForm'); }
                                                                  if (a[1] === 'Purchase') { ttq.track('CompletePayment', { currency: 'COP', value: (a[2] && a[2].value) || 9900, content_type: 'product' }); }
                                                  }
                                    } catch (e) {}
                                    return orig.apply(this, arguments);
                        };
                        for (var k in orig) { if (Object.prototype.hasOwnProperty.call(orig, k)) { window.fbq[k] = orig[k]; } }
                        window.fbq.__ttqHooked = true;
                        clearInterval(hook);
              }
              if (++tries > 100) { clearInterval(hook); }
      }, 100);
})();


// Propaga los parametros de campana del landing (nospi.co) hacia la app
// (app.nospi.co). Son dominios distintos, asi que el localStorage NO se
// comparte: si no reescribimos los enlaces, la atribucion se pierde en el
// salto y todos los registros aparecen como 'directo'.
(function () {
    try {
        var p = new URLSearchParams(window.location.search);
        // 'plan' es la marca de la PUERTA 2 (ver PUERTA-2.md en el repo de la
        // app): quien llega con ?plan=sub no ve el pago por evento. Si no viaja
        // en esta lista, la campana de solo-suscripcion pierde su marca al
        // saltar de nospi.co a app.nospi.co y el experimento no se puede medir.
        var keep = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ttclid', 'fbclid', 'gclid', 'plan'];
        var out = new URLSearchParams();
        for (var i = 0; i < keep.length; i++) {
            var v = p.get(keep[i]);
            if (v) { out.set(keep[i], v); }
        }
        var extra = out.toString();
        if (!extra) { return; }
        function propagar() {
            var links = document.querySelectorAll('a[href*="app.nospi.co"]');
            for (var j = 0; j < links.length; j++) {
                var h = links[j].getAttribute('href');
                if (!h || h.indexOf('utm_source=') > -1 || h.indexOf('ttclid=') > -1) { continue; }
                links[j].setAttribute('href', h + (h.indexOf('?') > -1 ? '&' : '?') + extra);
            }
        }
        propagar();
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', propagar);
        }
        setTimeout(propagar, 1500);
    } catch (e) {}
})();
