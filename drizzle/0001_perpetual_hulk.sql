CREATE TABLE `contactSubmissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`message` text NOT NULL,
	`status` enum('new','read','replied','archived') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contactSubmissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `legalPages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`pageType` enum('disclaimer','risk_disclosure','terms','privacy','cookie') NOT NULL,
	`titleEn` varchar(255) NOT NULL,
	`titleRu` varchar(255) NOT NULL,
	`contentEn` text NOT NULL,
	`contentRu` text NOT NULL,
	`version` int NOT NULL DEFAULT 1,
	`effectiveDate` timestamp NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `legalPages_id` PRIMARY KEY(`id`),
	CONSTRAINT `legalPages_pageType_unique` UNIQUE(`pageType`)
);
--> statement-breakpoint
CREATE TABLE `marketInsights` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titleEn` varchar(255) NOT NULL,
	`titleRu` varchar(255) NOT NULL,
	`slugEn` varchar(255) NOT NULL,
	`slugRu` varchar(255) NOT NULL,
	`excerptEn` text NOT NULL,
	`excerptRu` text NOT NULL,
	`contentEn` text NOT NULL,
	`contentRu` text NOT NULL,
	`coverImageUrl` text,
	`status` enum('draft','published','archived') NOT NULL DEFAULT 'draft',
	`publishedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`authorId` int NOT NULL,
	CONSTRAINT `marketInsights_id` PRIMARY KEY(`id`),
	CONSTRAINT `marketInsights_slugEn_unique` UNIQUE(`slugEn`),
	CONSTRAINT `marketInsights_slugRu_unique` UNIQUE(`slugRu`)
);
--> statement-breakpoint
CREATE TABLE `subscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`plan` enum('free','core','pro') NOT NULL,
	`status` enum('active','cancelled','expired','pending') NOT NULL DEFAULT 'pending',
	`stripeCustomerId` varchar(255),
	`stripeSubscriptionId` varchar(255),
	`currentPeriodStart` timestamp,
	`currentPeriodEnd` timestamp,
	`cancelAtPeriodEnd` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `subscriptions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `telegramAccess` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`inviteLink` text,
	`channelAccess` text,
	`accessGrantedAt` timestamp,
	`accessRevokedAt` timestamp,
	`status` enum('active','revoked') NOT NULL DEFAULT 'active',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `telegramAccess_id` PRIMARY KEY(`id`),
	CONSTRAINT `telegramAccess_userId_unique` UNIQUE(`userId`)
);
--> statement-breakpoint
CREATE TABLE `tradingIdeas` (
	`id` int AUTO_INCREMENT NOT NULL,
	`instrument` varchar(100) NOT NULL,
	`contextEn` text NOT NULL,
	`contextRu` text NOT NULL,
	`scenarioEn` text NOT NULL,
	`scenarioRu` text NOT NULL,
	`invalidationZone` varchar(255) NOT NULL,
	`targetArea` varchar(255) NOT NULL,
	`market` enum('indices','fx','energy','metals') NOT NULL,
	`accessLevel` enum('sample','core','pro') NOT NULL DEFAULT 'core',
	`status` enum('draft','published','archived') NOT NULL DEFAULT 'draft',
	`publishedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`authorId` int NOT NULL,
	CONSTRAINT `tradingIdeas_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `role` enum('guest','registered','core','pro','admin') NOT NULL DEFAULT 'registered';--> statement-breakpoint
ALTER TABLE `users` ADD `language` enum('en','ru') DEFAULT 'en' NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `termsAccepted` boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `termsAcceptedAt` timestamp;