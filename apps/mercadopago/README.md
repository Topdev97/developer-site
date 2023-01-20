# Mercadopago NodeJS Server Typescript

Mercadopago is a free market payment platform ,is present throughout Latin America.

The following implementation is the server that allows processing customer orders and obtaining a payment id to be later used to direct the user to the payment module within the site.

## Features

- Checkout within the same site
- Fast payment and great shopping experience for users
- Accept multiple payment methods (credit, debit,banks transferences, mercadopago account)
- Customizable
- Multiple validations, from payments to the identity of the buyer

# Installation


# Usage

## Basic configuration

with this configurations you have the service of mercado pago without store, you only need a access_token, maybe you'll like to receive notifications thorugh gmail for this, use the following config.

```
ACCESS_TOKEN=
EMAIL=
APIKEY=

```
if you dont want to receive notification, go to /components/notifications/controller.ts and delete sendemail function

```js
    if (data.body) {
-    sendEmail(data,'Notifacion MercadoPago');
    }

```

## Set domain for customer experiencie

to redirect customer when they end the shopping set the domain

```
SITE_DOMAIN=
```
## set domain for deploy

this domain is necesarry for client side fetch when they ask for preference
```
SERVER_DOMAIN=
```

## Deploy


### Vercel

### Docker


## Store mode

With this mode you can store the data of notification and preference in the store, set the database credentials

```

MONGO_USERNAME=root
MONGO_PASSWORD=example

```
if you run local set this in mongo.ts in store folder, set atlas false

```js
    import { config } from "../config";
    import { MongoClient } from "mongodb";
    const atlas = false
```


# Servidor para pagos de MercadoPago

El siguiente proyecto es una implementacion de un servidor para recibir pagos a traves de la billetera virtual del Mercado Pago, esta aplicacion se encarga de generar las preferencias para procesas pagos en el frontend y de recibir las notificaciones enviadas por mercado pago.

## Technologies

- NodeJS
- Express
- Typescript

# Server for MercadoPago payments

The following project is an implementation of a server to receive payments through the Mercado Pago virtual wallet, this application is responsible for generating preferences for processing payments on the frontend and receiving notifications sent by Mercado Pago.

## Technologies

- NodeJS
- Express
- Typescript