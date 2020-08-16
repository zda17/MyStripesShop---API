CREATE TABLE carts (
 	UUID 
		TEXT
		NOT NULL
		PRIMARY KEY,
	created_at
		TIMESTAMPTZ
		NOT NULL 
		DEFAULT now(),
	updated_at
		TIMESTAMPTZ
		NOT NULL
		DEFAULT now()
);