TRUNCATE TABLE 
	line_items,
	orders,
	users,
	products,
	categories,
	carts RESTART IDENTITY;

INSERT INTO carts (UUID, created_at, updated_at)
VALUES
	('a6b14dc5-8102-4d14-8d43-73bf16118eec', now(), now()),
	('8f3a2cd3-3fc5-42e3-8ca8-c235e034e3a8', now(), now()),
	('f0629416-fa41-4850-b598-db7b1908a483', now(), now());

INSERT INTO categories (name, created_at, updated_at)
VALUES
	('tops', now(), now()),
	('bottoms', now(), now()),
	('accessories', now(), now());

INSERT INTO products (sku, base_sku, name, category, description, gender, photo_url, created_at, updated_at, price_cents, size, color, quantity_available)
VALUES
	-- american tour collection
	-- Thinking D:darkBlue G:Green P:Peach, etc..
	('ATC-OK-Beanie-M-DKBL', 'ATC-OK-Beanie', 'Oklahoma Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615644/MyStripesProducts/American%20Tour%20Collection/Beanies/Oklahoma_Beanie_1_rmnlfi.png', now(), now(), 2200, 'M', 'darkBlue', 0),
	('ATC-OK-Beanie-XS-WHITE', 'ATC-OK-Beanie', 'Oklahoma Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615644/MyStripesProducts/American%20Tour%20Collection/Beanies/Oklahoma_Beanie_1_rmnlfi.png', now(), now(), 2200, 'XS', 'white', 1),
	('ATC-OK-Beanie-S-WHITE', 'ATC-OK-Beanie', 'Oklahoma Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615644/MyStripesProducts/American%20Tour%20Collection/Beanies/Oklahoma_Beanie_1_rmnlfi.png', now(), now(), 2200, 'S', 'white', 3),
	('ATC-OK-Beanie-M-WHITE', 'ATC-OK-Beanie', 'Oklahoma Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615644/MyStripesProducts/American%20Tour%20Collection/Beanies/Oklahoma_Beanie_1_rmnlfi.png', now(), now(), 2200, 'M', 'white', 5),
	('ATC-OK-Beanie-L-WHITE', 'ATC-OK-Beanie', 'Oklahoma Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615644/MyStripesProducts/American%20Tour%20Collection/Beanies/Oklahoma_Beanie_1_rmnlfi.png', now(), now(), 2200, 'L', 'white', 4),
	('ATC-OK-Beanie-L-PEACH', 'ATC-OK-Beanie', 'Oklahoma Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615644/MyStripesProducts/American%20Tour%20Collection/Beanies/Oklahoma_Beanie_1_rmnlfi.png', now(), now(), 2200, 'L', 'peach', 1),
	('ATC-OK-Beanie-M-PEACH', 'ATC-OK-Beanie', 'Oklahoma Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615644/MyStripesProducts/American%20Tour%20Collection/Beanies/Oklahoma_Beanie_1_rmnlfi.png', now(), now(), 2200, 'M', 'peach', 1),
	('ATC-OK-DadHat-XS', 'ATC-OK-DadHat', 'Oklahoma Dad Hat', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'M', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615642/MyStripesProducts/American%20Tour%20Collection/Hats/Oklahoma_Dad_Hat_bie9vy.png', now(), now(), 2200, 'M', 'white', 2),
	('ATC-OK-Hoodie-XS', 'ATC-OK-Hoodie', 'Oklahoma Hoodie', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'F', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615666/MyStripesProducts/American%20Tour%20Collection/Hoodies/The_American_Tour-_Oklahoma_ghvq3d.png', now(), now(), 3500, 'M', 'white', 4),
	('ATC-OK-Tee-XS', 'ATC-OK-Tee', 'Oklahoma T-shirt', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'F', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615641/MyStripesProducts/American%20Tour%20Collection/Tees/The_American_Tour-_T_shirt_Oklahoma_yajzd6.png', now(), now(), 2500, 'M', 'white', 3),

	-- my stripes custom merch collection
	('MSCM-DadHat-XS', 'MSCM-DadHat', 'My Stripes Dad Hat', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'M', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615695/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Dad_Hat_hipah5.png', now(), now(), 2200, 'M', 'white', 5),
	('MSCM-Tee-XS', 'MSCM-Tee', 'My Stripes T-shirt', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_T-shirt_t3r3lf.png', now(), now(), 2500, 'M', 'white', 0),
	('MSCM-Hoodie-XS', 'MSCM-Hoodie', 'My Stripes Hoodie', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', now(), now(), 3500, 'M', 'white', 6),
	('MSCM-Beanie-XS', 'MSCM-Beanie', 'My Stripes Beanie', 'accessories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615689/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Beanie_rqxc8m.png', now(), now(), 2200, 'M', 'white', 0),

	-- world tour collection
	('WTC-Hoodie-XS', 'WTC-Hoodie', 'World Tour - Australia Hoodie', 'tops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'U', 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615712/MyStripesProducts/World%20Tour%20Collection/Hoodies/World_Tour-_Austrilia_Hoodie_vkd1bz.png', now() ,now(), 3500, 'M', 'darkBlue', 3);

INSERT INTO users (email, encrypted_password, admin)
VALUES
	-- admin password is admin123
	('admin@mystripes.com', '$2a$10$ZYFRU.Gg/.e1G7cRJKNcueWH.M4TyRov9LTLV5uGxbhyQSLBK/RtS', TRUE),
	('user@test.com', '$2a$10$hU98gp5TgV65aHgylvurcOZwMjsZspfhCsZdNYEWKXN6kF0bCSdfC', FALSE),
	('demo@email.com', '$2a$10$3TFONhx44jc5xeEb23PmVOuq7LtQsNsLy1Rthjomspza02eJr94SS', FALSE);

INSERT INTO orders (email, address, state, product_ids, amount_cents, checkout_session_id, UUID)
VALUES
	('user@test.com', '123 Address Lane', 'OK', '{1, 3, 5}', 7900, 1, 'a6b14dc5-8102-4d14-8d43-73bf16118eec'),
	('demo@email.com', '123 Address Lane', 'MN', '{3, 4, 5}', 8200, 2, '8f3a2cd3-3fc5-42e3-8ca8-c235e034e3a8');

INSERT INTO line_items (quantity, product_sku, cart_id, order_id)
VALUES
	(2, 'ATC-OK-Beanie-S-WHITE', 'a6b14dc5-8102-4d14-8d43-73bf16118eec', 1),
	(2, 'ATC-OK-DadHat-XS', 'a6b14dc5-8102-4d14-8d43-73bf16118eec', 1),
	(1, 'MSCM-Hoodie-XS', '8f3a2cd3-3fc5-42e3-8ca8-c235e034e3a8', 2);