import {useEffect, useState, type ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute} from "@tanstack/react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import MessengerWidget from "@/components/MessengerWidget";
import NotFound from "@/pages/NotFound";
import {initLinkGoals} from "@/lib/metrika";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import appCss from "@/index.css?url";

const TITLE = "ПЭТ банки, коричневые банки и флаконы оптом — пластиковая тара СПб и Россия";
const DESCRIPTION =
    "Пластиковая тара оптом: ПЭТ банки 50–500 мл, коричневые банки, флаконы с распылителем. Цены за штуку, склад в Ленинградской области, доставка по СПб и всей России.";
const KEYWORDS =
    "коричневые банки пластиковые, коричневые пластиковые банки оптом, коричневые пэт банки, коричневые флаконы, коричневые пластиковые флаконы, флаконы с распылителем оптом, тара пластиковая оптом, пэт банки, пластиковые банки, банки опт, пэт банки спб, пэт банки доставка, пэт тара, пластиковая тара, тара пэт, банки пэт оптом, пластиковая тара оптом, купить пластиковые банки, пэт банки санкт-петербург, тара пакинг, tara packing, баночки пэт, банка 100мл, банка 150мл, банка 200мл, банка 250мл, банка 300мл, банка 380мл, банка 500мл, банка пэт, банка пэт 89 горло, банка с крышкой, пищевая тара, флаконы, флакон с распылителем, флакон для косметики, банка пэт для косметики, пэт банки для косметики, ПЭТ упаковка, пластиковые флаконы, упаковка ПЭТ, тара ПЭТ, упаковка для косметики, флаконы для косметики, банка для крема, упаковка для пищевых продуктов, банка для специй, флакон для масла, упаковка для БАДов, оптовая продажа упаковки, упаковка для бизнеса, тара для производства, поставка упаковки, упаковочные материалы, ПЭТ тара СПб";
const OG_IMAGE = "https://cdn.poehali.dev/intertnal/img/og.png";

const OFFER = (name: string, description: string) => ({
    "@type": "Offer",
    priceCurrency: "RUB",
    price: "0",
    availability: "https://schema.org/InStock",
    url: "https://tara-packing.ru/#Каталог",
    itemOffered: {"@type": "Product", name, description},
});

const LOCAL_BUSINESS = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ПЭТ Тара",
    description: "ПЭТ банки и пластиковая тара оптом от 50 до 500 мл с доставкой по Санкт-Петербургу и всей России.",
    url: "https://tara-packing.ru/",
    priceRange: "$$",
    email: "info-pet.tara@mail.ru",
    address: {
        "@type": "PostalAddress",
        addressLocality: "п. Романовка, Всеволожский район",
        addressRegion: "Ленинградская область",
        addressCountry: "RU",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: {"@type": "Country", name: "Россия"},
    makesOffer: [
        OFFER("ПЭТ банки оптом", "Пластиковые банки ПЭТ объёмом от 50 до 500 мл"),
        OFFER("ПЭТ флаконы оптом", "Пластиковые флаконы и банки ПЭТ для косметики, упаковка для косметики и бытовой химии"),
        OFFER("Крышки и дозаторы для ПЭТ тары", "Крышки и дозаторы для пластиковых банок и флаконов"),
    ],
};

const METRIKA = `(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(114010934, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true, trackHash: true });`;

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {title: TITLE},
            {name: "description", content: DESCRIPTION},
            {name: "keywords", content: KEYWORDS},
            {name: "robots", content: "index, follow"},
            {name: "author", content: "ПЭТ Тара"},
            {name: "google-site-verification", content: "xOk7T_3s2opNpDLExmfeOurKKg3GWa09J0GbZjS19uE"},
            {name: "yandex-verification", content: "f02565b236becbd8"},
            {property: "og:type", content: "website"},
            {property: "og:locale", content: "ru_RU"},
            {property: "og:url", content: "https://tara-packing.ru/"},
            {property: "og:site_name", content: "ПЭТ Тара"},
            {property: "og:title", content: "ПЭТ банки, коричневые банки и флаконы оптом — пластиковая тара"},
            {property: "og:description", content: DESCRIPTION},
            {property: "og:image", content: OG_IMAGE},
            {property: "og:image:width", content: "4800"},
            {property: "og:image:height", content: "2520"},
            {property: "og:image:alt", content: "ПЭТ банки и пластиковая тара оптом"},
            {name: "twitter:card", content: "summary_large_image"},
            {name: "twitter:title", content: "ПЭТ банки и пластиковая тара оптом"},
            {name: "twitter:description", content: "ПЭТ банки и пластиковая тара оптом с доставкой по СПб и России."},
            {name: "twitter:image", content: OG_IMAGE},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "preconnect", href: "https://fonts.googleapis.com"},
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&family=Oswald:wght@300;400;500;600&display=swap",
            },
            {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"},
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
            {src: "https://cdn.poehali.dev/intertnal/js/inspector-min.js"},
            {type: "application/ld+json", children: JSON.stringify(LOCAL_BUSINESS)},
            {children: METRIKA},
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFound,
});

function RootComponent() {
    const [queryClient] = useState(() => new QueryClient());

    useEffect(() => {
        initLinkGoals();
    }, []);

    return (
        <RootDocument>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster/>
                    <Sonner/>
                    <Outlet/>
                    <MessengerWidget/>
                </TooltipProvider>
            </QueryClientProvider>
        </RootDocument>
    );
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/114010934" style={{position: "absolute", left: "-9999px"}} alt=""/></div>
        </noscript>
        <Scripts/>
        </body>
        </html>
    );
}
