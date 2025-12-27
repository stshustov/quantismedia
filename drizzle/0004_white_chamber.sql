ALTER TABLE `marketInsights` ADD `market` enum('indices','fx','energy','metals','global_macro') NOT NULL;--> statement-breakpoint
ALTER TABLE `marketInsights` ADD `contentType` enum('analysis','daily_outlook','weekly_outlook') DEFAULT 'analysis' NOT NULL;--> statement-breakpoint
ALTER TABLE `marketInsights` ADD `accessLevel` enum('sample','core','pro') DEFAULT 'pro' NOT NULL;