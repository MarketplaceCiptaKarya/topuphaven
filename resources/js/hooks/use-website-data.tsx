export default function useWebsiteData() {
    const navbarData = {
        logo: {
            url: route('home'),
            src: '/logo.webp',
            alt: 'Corner Topup logo',
            title: '',
        },
        menu: [
            {
                title: 'Home',
                url: route('home'),
                isActive: route().current('home'),
            },
            {
                title: 'Check Transaction',
                url: route('check-transaction'),
                isActive: route().current('check-transaction'),
            },
        ],
    };
    const carouselData = [
        {
            id: crypto.randomUUID(),
            image: 'https://fls-9fd77362-7789-4fd3-ab74-adaf4e89507f.laravel.cloud/carousels/Carousel1.webp',
            alt: 'Carousel 1',
        },
        {
            id: crypto.randomUUID(),
            image: 'https://fls-9fd77362-7789-4fd3-ab74-adaf4e89507f.laravel.cloud/carousels/Carousel2.webp',
            alt: 'Carousel 2',
        },
        {
            id: crypto.randomUUID(),
            image: 'https://fls-9fd77362-7789-4fd3-ab74-adaf4e89507f.laravel.cloud/carousels/Carousel3.webp',
            alt: 'Carousel 3',
        },
    ];
    const footerData = {
        logo: {
            src: '/logo.webp',
            alt: 'Corner Topup Logo',
            title: 'Corner Topup',
            url: route('home'),
        },
        tagline: '',
        menuItems: [
            {
                title: 'Menu',
                links: [
                    { text: 'Home', url: route('home') },
                    { text: 'Check Transaction', url: route('check-transaction') },
                ],
            },
            {
                title: 'Company',
                links: [
                    { text: 'Contact Us', url: route('contact-us'), },
                    { text: 'Terms and Conditions', url: route('terms-and-conditions') },
                    { text: 'Privacy Policy', url: route('privacy-policy') },
                ],
            },
        ],
        copyright: `© ${new Date().getFullYear()} Corner Topup. All rights reserved.`,
        bottomLinks: [],
    };
    const voucherTitle = 'Vouchers';

    return {
        navbarData,
        carouselData,
        footerData,
        voucherTitle,
    } as const;
}
