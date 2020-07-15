CREATE TABLE users (
    id 
        SERIAL
        PRIMARY KEY,
    email
        TEXT
        NOT NULL,
    encrypted_password
        TEXT
        NOT NULL,
    reset_password
        TEXT
        NOT NULL,
    reset_password_sent_at
        TIMESTAMPTZ
        NOT NULL
        DEFAULT now(),
    remember_created_at
        TIMESTAMPTZ
        NOT NULL
        DEFAULT now(),
    created_at
        TIMESTAMPTZ
        NOT NULL
        DEFAULT now(),
    updated_at
        TIMESTAMPTZ
        NOT NULL
        DEFAULT now()
);