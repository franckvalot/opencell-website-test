---
type: blogarticle
draft: 'false'
title: Billing for the cloud
subtitle: >-
  Don't let your billing system limit your capacity to create a unique value
  proposition.
description: >-
  Cloud service providers require sophisticated monetization and billing
  go-to-market strategies that will serve as strategic differentiators in a
  competitive. 
author: Ethan Beardsley
date: 2019-01-17T08:05:55.197Z
articlestags:
  - one
  - two
  - three
thumbnail: /img/uploads/img_blog.jpg
---
Cloud computing promises IT on demand—perfectly adapted to enterprise needs and quick to react to changing business circumstances. To deliver on this promise, cloud providers require sophisticated monetization and billing go-to-market strategies that will serve as strategic differentiators in a crowded, hyper-competitive market.



In this article, we'll discuss the key drivers of cloud provider monetization models and provide a checklist of key questions a cloud provider should ask when choosing a billing solution.

# Different needs for different businesses

Cloud providers seek to align billing metrics with service usage. Consequently, the monetization models will differ according to service type. 

## Infrastructure as a service (Iaas)

Infrastructure as a Service (IaaS) is a self-service cloud for accessing, monitoring, and managing remote datacenter infrastructures, such as compute (virtualized or bare metal servers), storage, networking, and networking services. In such models, users remain responsible for managing applications, data, runtime, middleware, and operating systems.

Granularity of billing is generally driven by the specifications and usage of the underlying server infrastructure. Types of usage that can be used to bill IaaS include:

* **Power and number of CPU cores**. CPU power may be differentiated by time zone, static (based on peak and off peak resources) or dynamic, where price is determined by demand at the time.
* **Server type**. The type of bare metal server or virtual machine is used to determine pricing. A top-of-the-range server with high availability will have significantly higher cost points than a basic server.
* **Bandwidth consumption.**  This will often need to be allocated individually to each client.
* **Operating system**. The operating system (e.g. Windows or Linux) will determined the rate at which the server is charged.
* **Storage capacity**. Disk capacity (including mirroring) will impact the cost of the service.
* **Use of API calls.**  This billing metric is becoming increasingly common. In such case, pricing might be determined by the number of API calls made each month.
* **Service level agreements**. SLA impact price both in terms of the agreed level of service and penalties due when contractual SLAs are not achieved.
* **Disaster recovery**. The time window for service reactivation impacts pricing (particularly if duplication of dedicated resources is required).

Based on the above, it is easy to understand that IaaS offers quickly reach a high level of complexity, particularly when marketing teams that constantly revise or launch new offers and/or sales teams require custom offers based on single customer requirements.

Some examples of IaaS billing strategies include:

* Amazon Elastic Compute, a generic IaaS service, that charges customers based on per hour usage based on a server type, RAM etc., whether the server is dedicated, shared or reserved and on volume based discount
* OVH DBaas Time Series, a IaaS service designed for IoT applications, that charges customers based on API calls and data points/series stored.

Platform as a Service (PaaS)



Platform as a service (PaaS) is a niche market compared to IaaS. It is generally used for applications development when developers require a framework they can build upon to develop or customize applications. A PaaS provider manages operating systems, virtualization, servers, storage, networking, and middleware while developers manage application development using software components that are built into the middleware.



Standard billing models for PaaS are generally simpler that complex IaaS offers. They are often based on server specifications, number of projects and/or utilization time.



Some examples of PaaS billing include:



Azure App Engine, a platform that allows developers to develop applications for Microsoft Azure platform, that charges for number of application servers based on tiers and adds bandwidth consumption.

Force.com, a platform that allows developers to create multi-tenant applications directly integrated into the core Salesforce application, that charges per user with a cap on the number of projects per user.

 



Software as a Service (SaaS)



Software as a service represents the largest cloud market. It is common for SaaS software publishers to run their businesses on core IaaS infrastructure provided by major public cloud operators. Salesforce, for example, recently signed a $400 million exclusive deal with Amazon Web Services to run all its SaaS and PaaS activities.



Billing models are generally indexed on concurrent users or usage and tiered feature packages used by the client. Most of the complexity of the IaaS pricing model is bundled into the single per user fee.



Some examples of SaaS monetization models include:



Salesforce that charges on a per user/per feature package with pricing ranging from $5 to $250 per month

Hubspot and Mailchimp that bill customers based on the number of contacts held in their databases.

What's the right choice for your business?



As we have seen above in our overview of the different cloud monetization models, billing requirements will vary according to the nature of your cloud business.



For IaaS businesses, you'll probably need to look at convergent billing systems that have already been deployed in a telco-like environment since the complex usage scenarios are quite similar but you'll also need to make sure that the solution is agile enough for you to be able to rapidly design and configure new offers in response to sales and marketing team demands.



If you're running a SaaS business, you might be able to start with simpler solutions that will focus more on managing recurring subscriptions but this could have certain drawbacks, particularly in terms of managing the complexity of the underlying infrastructure if you're considering running your SaaS business on a public cloud.



Here's a checklist of some of the key features and requirements that you should consider when choosing your billing system. 

 

Mediation and event management



IaaS cloud providers, in particular, will need to develop offers adapted to big data and IoT clouds. This will require the ability to aggregate huge quantities of data points, such as API calls or data series, to create ratable, billable information. This capability will probably constitute a significant strategic differentiator for smaller IaaS players focused on creating aggregated offers using the cloud offerings of the "hyperscale" public cloud players.



Cloud providers that anticipate the need to mediate and aggregate a large number of events should therefore look carefully at available mediation and data integration options (integrated or third party) when selecting their billing solution. 

 

Complex charging



IaaS providers, and to a lesser extent PaaS and SaaS providers, need to be able to bill using a wide variety of rate plans and usage charges including:



Flat fee: all you can eat for $20

Usage: 1$ per unit consumed

Overage: 10 units for $10. Additional charge of $0.5 for excess units

Volume: 10 units for $2 each. 20 units for $1.5 each. 30 units for $1 each

Tiered: 0-10 units for $2. 10-20 units for $1.5. 20-30 units for $1 each.

Minimum fee: $10 per month minimum + $1per item consumed.

Capped: $1 per unit consumed with maximum of $20 month

Additional complexity will come if you need to manage prepaid wallets and capping scenarios. 

 

Back-to-back billing



Many cloud providers function as resellers of services provided by hyperscale providers like Amazon Web Services or Microsoft Azure. These providers have bills that are complex to allocate since all usage and data for customers is delivered in a single file. Volume discounts, reserved instance discounts etc. will also be applied across all accounts.



Allocating these costs against customers and creating invoices manually is an incredibly complex labor-intensive and error-prone process. Use of inadequate tools that don't accurately reprocess usage can result in reduced margins.



In evaluating a billing solution, all cloud providers should make sure that it allows a smooth recharging of cloud infrastructure spending against customized price plans. If you want to bill back-to-back, you'll need to make sure that your billing solution can mirror that of your underlying IaaS provider. 

 

Discounts



Almost all cloud providers will need to be able to manage incentives and cross-discounts (e.g., "If you buy services from Cloud A, you can get services from Cloud B at a different discount.").



Your billing system should be able to handle tiered discounts, where the enterprise price point decreases "per unit" for higher usage, or for usage in off peak time periods, reflecting the desire to incent customers to spread processing as much as possible and thus maximize the utilization of the cloud provider infrastructure. 

 

Customer management



Flexibility in defining the billing entity is critical, particularly in dealing with large enterprise customers. A billing entity could be an enterprise, enterprise department, enterprise project, or a government agency. Such customer entities can be changed as departments merge or new departments are created. With cloud computing's "pay per use" model, defining and redefining customer entities must be handled by cloud billing systems since it will be expected by major corporate customers.



You should make sure that sure that you provide provides the organizational flexibility to bill at all levels of your client's organizational hierarchy. Ability to perform billing at a detailed level will add significant value for your end customers, particularly in a context where hyperscale players struggle to provide detailed billing information. 

 

Vendor management



Cloud providers, in particular SaaS providers often partner with other IaaS providers as well as third-party vendors.



For this reason, they need to keep track of not only the enterprise balance per business unit or department, but also the partner balance, so that they can settle with the partner. Such balance may be maintained per module, or even per module combined with embedded technology from another partner (e.g., software license + database).



It is particularly important that the cloud provider understand all of these costs in order to create a working usage-based model for the enterprise customer. Having the power to dynamically model and compare IaaS offers also provides SaaS vendors to dynamically arbitrage cloud IaaS solutions and drive bottom-line efficiencies. 

 

Multi-channel and self-service



Customers expect to take care of themselves. They need to be able to access their subscriptions and cloud usage data. They need to be able to simulate the impact of changes in their plan and modify their subscriptions online. In evaluating your billing software, you should look at how easy it will be to integrate your billing solution with your customer



Competition is heating up in the cloud market. As hyperscale players like AWS, Azure and Amazon continue to capture battle for market share, significant opportunities still exist for smaller players to create differentiated, relevant offers in their market segments. One of the key differentiators for small and mid-size cloud providers will be their ability to rely on agile monetization and billing systems to create tailored, relevant offers for their respective markets and to efficiently manage relationships with third-party partners.



Interested in finding out more about how a sophisticated billing solution can help you monetize your cloud? Join us for our upcoming webinar on billing for the cloud: https://opencellsoft.com/webinar/cloud/
