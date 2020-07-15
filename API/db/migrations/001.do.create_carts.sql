CREATE TABLE carts (
<<<<<<< HEAD
	created_at TIMESTAMP(6) NOT NULL DEFAULT now(),
	updated_at TIMESTAMP NOT NULL DEFAULT now()
);

=======
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
>>>>>>> de049250601c8641bbf09a043b6367bba5b3a586
