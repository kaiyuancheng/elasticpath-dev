---
title: API Reference
nav_label: API Reference
sidebar_position: 10
---

The Commerce API is a set of APIs used to manage resources. The following table lists the top-level resources in alphabetical order with a
brief description and links to related content. To view all endpoints, see the methods in the linked sections or use
the [Postman collection](/docs/commerce-cloud/api-overview/test-with-postman-collection).

| Resource                      | Description                                                                                                    | Links                                                                                                                                                                                                                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/pcm/catalogs`               | Catalog configuration, rules, and administrator context.                                                       | [Catalogs](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview)                                                                                                                                                                                                    |
| `/pcm/catalog`                | Retrieve the published catalog that best matches the shopper context according to the defined catalog rules.   | [Catalog by Shopper Context](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview)                                                                                                                                                                                              |
| `/pcm/hierarchies`            | Hierarchy management that supports user-defined, structured hierarchies.                                       | [Hierarchies](/docs/pxm/hierarchies/hierarchies-api/hierarchies-api-overview)                                                                                                                                                                                                          |
| `/pxm/pricebooks`             | Price books contain product prices in multiple currencies.                                                     | [Price Books](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview)                                                                                                                                                                                                             |
| `/pcm/products`               | Product information and relationships.                                                                         | [Products](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)                                                                                                                                                                                                           |
| `/pcm/variations`             | Create and view product variations for your store.                                                             | [Product Variations](/docs/pxm/products/pxm-product-variations/pxm-product-variations-api/create-variation)                                                                                                                                                                            |
| `/v2/accounts`                | Business accounts.                                                                                             | [Accounts](/docs/commerce-cloud/accounts)                                                                                                                                                                                                                                     |
| `/v2/account-members`         | Business account users.                                                                                        | [Account Members](/docs/commerce-cloud/accounts/using-account-members-api/overview)                                                                                                                                                                                                    |
| `/v2/account-memberships`     | Assignment of business account users to business accounts                                                      | [Account Memberships](/docs/commerce-cloud/accounts/using-account-membership-api/overview)                                                                                                                                                                                             |
| `/v2/authentication-realms`   | Single sign-on support for your business customers.                                                            | [Authentication Realms](/docs/commerce-cloud/authentication/single-sign-on/authentication-realm-api/authentication-realm-api-overview), [OpenID Connect Profiles](/docs/commerce-cloud/authentication/single-sign-on/openid-connect-profiles-api/openid-connect-profiles-api-overview) |
| `/v2/carts`                   | Cart management, including carts, cart items, and taxes. Associate carts with customers.                       | [Carts](/docs/commerce-cloud/carts/cart-management/cart-management-overview)                                                                                                                                                                                                           |
| `/v2/currencies`              | Currencies that are used to display prices.                                                                    | [Currencies](/docs/pxm/currencies)                                                                                                                                                                                                                                          |
| `/v2/customers`               | Customer management, including addresses and orders.                                                           | [Customers](/docs/commerce-cloud/customer-management/customer-managment-api/customer-management-api-overview)                                                                                                                                                                          |
| `/v2/files`                   | Images and other files.                                                                                        | [Files](/docs/pxm/products/product-assets/files-overview)                                                                                                                                                                                                                              |
| `/v2/fields`                  | Product attributes used to define characteristics of products in a store.                                      | [Create an attribute](/docs/pxm/products/extending-pxm-products/pxm-product-attributes-api/create-attribute)                                                                                                                                                                           |
| `/v2/flows`                   | Data model extensions. You can extend an existing resource or create a new resource.                           | [Custom Data (Flows)](/docs/commerce-cloud/custom-data/custom-data-flows-api/custom-data-flows-api-overview)                                                                                                                                                                           |
| `/v2/gateways`                | Payment gateways that you can configure so that customers can pay for their orders.                            | [Gateways](/docs/commerce-cloud/payments)                                                                                                                                                                                                                                     |
| `/v2/integrations`            | Integrate Commerce with your external systems using webhooks and message queue services.                       | [Integrations](/docs/commerce-cloud/integrations)                                                                                                                                                                                                                         |
| `/v2/inventories`             | Inventory management within your project.                                                                      | [Inventories](/docs/pxm/inventories/inventory-api-overview)                                                                                                                                                                                                                            |
| `/v2/jobs`                    | Task management for long-running background tasks, such as exporting orders.                                   | [Jobs](/docs/pxm/jobs-api/overview)                                                                                                                                                                                                                                                    |
| `/v2/merchant-realm-mappings` | Single sign-on configuration for administrators and developers.                                                | [Merchant Realm Mapping](/docs/commerce-cloud/authentication/single-sign-on/merchant-realm-mappings/merchant-realm-mappings-overview)                                                                                                                                                  |
| `/v2/orders`                  | Orders are the result of checking out a cart. A payment for an order is called a transaction.                  | [Orders](/docs/commerce-cloud/orders/orders-api/orders-api-overview), [Transactions](/docs/commerce-cloud/payments/transactions/transactions-overview)                                                                                                                                 |
| `/v2/personal-data`           | View and manage personal data.                                                                                 | [Logs](/docs/commerce-cloud/personal-data/personal-data-logs-api/personal-data-logs-api-overview), [Related Data Entries](/docs/commerce-cloud/personal-data/personal-data-related-data-entries-api/personal-data-related-entries-overview)                                            |
| `/v2/promotions`              | Promotions management, including promotion codes.                                                              | [Promotions](/docs/commerce-cloud/promotions/promotions-overview.md)                                                                                                                                                                                                                      |
| `/v2/settings`                | Global settings that affect your project, such as page length and language settings.                           | [Settings](/docs/commerce-cloud/global-project-settings/settings-overview)                                                                                                                                                                                                             |
| `/pcm/jobs`                   | Viewing the status of `https://useast.api.elasticpath.com/pcm/products/:productId/build` request in the build. | [Jobs](/docs/pxm/jobs-api/get-a-job)                                                                                                                                                                                                                                                   |