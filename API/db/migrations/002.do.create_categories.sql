CREATE TABLE categories (
	name 
		TEXT,
	created_at
		TIMESTAMPTZ
		NOT NULL
		DEFAULT now(),
	updated_at
		TIMESTAMPTZ
		NOT NULL
		DEFAULT now()
);