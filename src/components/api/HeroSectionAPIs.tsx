import React from 'react';
import Link from '@docusaurus/Link';
import {
  ShoppingBagRegular,
  BookRegular,
  ArrowSyncFilled,
  PersonCircleRegular,
  AppsListRegular,
  WalletCreditCardRegular,
  ContactCardGroupRegular,
  BookDatabaseRegular,
  ConnectedRegular,
  ArrowExportLtrFilled,
} from '@fluentui/react-icons';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Product Experience Manager',
    link: '/docs/api/pxm/products/introduction',
    icon: BookRegular,
    // lightImage: '/static/landing-page/hero/voice-graphic.png',
    // darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Create unique product experiences that exceed your customer expectations and drive growth, all with less reliance on IT for custom work.'
  },
  {
    title: 'Promotions',
    beta: false,
    link: '/docs/api/promotions/promotions-standard',
    icon: AppsListRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Manage your promotions with industry leading capabilities.',
  },
  {
    title: 'Subscriptions',
    link: '/docs/api/subscriptions/subscriptions-overview',
    icon: ArrowSyncFilled,
    // lightImage: '/static/landing-page/hero/livestream-graphic.png',
    // darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Easily deploy paid memberships, subscribe & save, and more to drive recurring revenue and improved average order value.',
  },
  {
    title: 'Account Management',
    link: '/docs/api/accounts/accounts-introduction',
    icon: PersonCircleRegular,
    // lightImage: '/static/landing-page/hero/video-graphic.png',
    // darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Create accounts and account members. Associated account members can log in to the store and create orders for their accounts.',
  },
  {
    title: 'Addresses',
    beta: false,
    link: '/docs/api/addresses/addresses-introduction',
    icon: ContactCardGroupRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Store customer addresses for billing and shipping.',
  },
  {
    title: 'Carts, Checkout, Orders',
    beta: false,
    link: '/docs/api/carts/carts-checkout-orders-introduction',
    icon: ShoppingBagRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Use carts, checkout and orders to get your products from the catalog into the cart, through checkout and into order completed state.',
  },
  {
    title: 'Payments',
    beta: false,
    link: '/docs/api/payments/payment-gateway-introduction',
    icon: WalletCreditCardRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Payments for orders are processed through a payment gateway. Composable Commerce offers integrations for a selection of payment gateway providers, or you can create your own integrations.',
  },
  {
    title: 'Custom Data',
    beta: false,
    link: '/docs/api/flows/flows-service-api',
    icon: BookDatabaseRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'You can define custom data fields for the resources that you use in your store or organization, such as adding more fields to the `account` resource. You can also create new resources.',
  },
  {
    title: 'Integrations',
    beta: false,
    link: '/docs/api/integrations/integrations-event-subscriptions-notifications',
    icon: ConnectedRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'You can integrate Commerce with your external systems like enterprise resource planning, order management, fulfilment, and other systems, ensuring that buying is quick and easy for your shoppers.',
  },
  {
    title: 'Exporter',
    beta: false,
    link: '/docs/api/exporter',
    icon: ArrowExportLtrFilled,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Export your orders from Commerce',
  },
];

function HeroAPI({
  link,
  title,
  icon: Icon,
  text,
 // lightImage,
 // darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-6">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>
    </Link>
  );
}

export default function HeroSectionAPIs() {
  return (
    <>
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-3xl font-bold">
            Documentation for Elastic Path's APIs
          </h2>
          <p className="max-w-3xl text-center text-text-400">
            Use our interactive documentation directly on our site or download the OpenAPI specification file for the services you are interested in.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroAPI {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}