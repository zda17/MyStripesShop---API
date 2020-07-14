CREATE TABLE orders (
    id
        SERIAL
        PRIMARY KEY,
    email 
        TEXT
        NOT NULL,
    address
        TEXT
        NOT NULL,
    state
        TEXT
        NOT NULL,   
    product_ids
        INTEGER[]
        REFERENCES products(id) ON DELETE CASCADE
        NOT NULL,
    amount_cents
        INTEGER
        NOT NULL
        DEFAULT 0,
    checkout_session_id
        TEXT
        NOT NULL,
    user_id 
        INTEGER
        NOT NULL
        REFERENCES users(id) ON DELETE CASCADE,
    created_at
        TIMESTAMPTZ
        NOT NULL
        DEFAULT now(),
    updated_at
        TIMESTAMPTZ
        NOT NULL
        DEFAULT now()
);