CREATE TYPE genders AS enum (
	'M',
	'F',
	'U'
);

CREATE TYPE color AS enum (
	'darkBlue',
	'blue',
	'green',
	'peach',
	'gold'
);

CREATE TABLE products (
 	id
		SERIAL
		PRIMARY KEY,
	sku
		TEXT
		NOT NULL,
	name
		TEXT
		NOT NULL,
	category
		TEXT
		NOT NULL,
	description
		TEXT
		NOT NULL,
	gender
		TEXT
		NOT NULL,
	photo_url
		TEXT,
	created_at
		TIMESTAMPTZ
		NOT NULL
		DEFAULT now(),
	updated_at
		TIMESTAMPTZ
		NOT NULL
		DEFAULT now(),
	price_cents
		INTEGER
		NOT NULL
		DEFAULT 0,
	size
		TEXT,
	color
		TEXT
		NOT NULL
);