CREATE TABLE carts (
 	id 
		SERIAL
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