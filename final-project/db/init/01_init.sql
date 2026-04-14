CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    agreement BOOLEAN NOT NULL
);

INSERT INTO users (email, phone, agreement)
VALUES
    ('alice@example.com', '+336731731', 'true'),
    ('bob@example.com', '+358371831', 'false')