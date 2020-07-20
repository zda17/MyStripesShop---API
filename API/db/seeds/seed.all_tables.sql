INSERT INTO carts (created_at, updated_at)
VALUES
	(now(), now()),
	(now(), now()),
	(now(), now());

INSERT INTO categories (name, created_at, updated_at)
VALUES
	('tops', now(), now()),
	('bottoms', now(), now()),
	('accessories', now(), now());

INSERT INTO products (sku, name, category, description, gender, photo_url, created_at, updated_at, price_cents, size)
VALUES
	-- american tour collection
	('ATC-OK-Beanie-1', 'Oklahoma Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615644/MyStripesProducts/American%20Tour%20Collection/Beanies/Oklahoma_Beanie_1_rmnlfi.png', now(), now(), 2200, 'M'),
	('ATC-OK-DadHat-1', 'Oklahoma Dad Hat', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'M', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615642/MyStripesProducts/American%20Tour%20Collection/Hats/Oklahoma_Dad_Hat_bie9vy.png', now(), now(), 2200, 'M'),
	('ATC-OK-Hoodie-1', 'Oklahoma Hoodie', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615666/MyStripesProducts/American%20Tour%20Collection/Hoodies/The_American_Tour-_Oklahoma_ghvq3d.png', now(), now(), 3500, 'M'),
	('ATC-OK-Tee-1', 'Oklahoma T-shirt', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615641/MyStripesProducts/American%20Tour%20Collection/Tees/The_American_Tour-_T_shirt_Oklahoma_yajzd6.png', now(), now(), 2500, 'M'),

	-- my stripes custom merch collection
	('MSCM-DadHat-1', 'My Stripes Dad Hat', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'M', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615695/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Dad_Hat_hipah5.png', now(), now(), 2200, 'M'),
	('MSCM-Tee-1', 'My Stripes T-shirt', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_T-shirt_t3r3lf.png', now(), now(), 2500, 'M'),
	('MSCM-Hoodie-1', 'My Stripes Hoodie', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', now(), now(), 3500, 'M'),
	('MSCM-Beanie-1', 'My Stripes Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615689/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Beanie_rqxc8m.png', now(), now(), 2200, 'M'),

	-- world tour collection
	('WTC-Hoodie-1', 'World Tour - Australia Hoodie', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615712/MyStripesProducts/World%20Tour%20Collection/Hoodies/World_Tour-_Austrilia_Hoodie_vkd1bz.png', now() ,now(), 3500, 'M');